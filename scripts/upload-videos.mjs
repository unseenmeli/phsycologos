import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import { basename } from 'path';

// This script uploads your video files to Vercel Blob storage

async function uploadVideo(filePath) {
  try {
    console.log(`📤 Uploading ${basename(filePath)}...`);

    const fileBuffer = readFileSync(filePath);
    const fileName = basename(filePath);

    const blob = await put(fileName, fileBuffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    console.log(`✅ Uploaded successfully!`);
    console.log(`   URL: ${blob.url}`);
    console.log('');

    return blob;
  } catch (error) {
    console.error(`❌ Error uploading ${filePath}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting video upload to Vercel Blob...\n');

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ Error: BLOB_READ_WRITE_TOKEN not found in environment variables');
    console.log('\n📝 To get your token:');
    console.log('   1. Go to https://vercel.com/dashboard');
    console.log('   2. Select your project');
    console.log('   3. Go to Settings → Blob → Create Store');
    console.log('   4. Copy the BLOB_READ_WRITE_TOKEN');
    console.log('   5. Run: export BLOB_READ_WRITE_TOKEN="your-token-here"\n');
    process.exit(1);
  }

  const videos = [
    'public/lightgreen.MOV',
    'public/newxatuna.MOV',
  ];

  const results = [];

  for (const video of videos) {
    try {
      const result = await uploadVideo(video);
      results.push({ file: basename(video), url: result.url });
    } catch (error) {
      console.error(`Failed to upload ${video}`);
    }
  }

  console.log('📋 Summary:');
  console.log('═══════════════════════════════════════════════════');
  results.forEach(({ file, url }) => {
    console.log(`${file}:`);
    console.log(`  ${url}\n`);
  });

  console.log('✨ Done! Copy these URLs and update your code.');
}

main();
