import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md shadow-lg z-50 border-b-2 border-gold/30">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 max-w-full overflow-visible">
          {/* Mobile Layout - Logo and Button */}
          <div className="flex items-center justify-between gap-2 md:hidden">
            <a href="#" className="flex items-center gap-2 flex-shrink min-w-0">
              <Image
                src="/logo.jpeg"
                alt="Psychologos"
                width={40}
                height={40}
                className="rounded-lg flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-emerald-dark truncate">
                  Psychologos
                </span>
                <span className="text-[9px] text-gold font-semibold truncate">
                  გამაჯანსაღებელი კურსი
                </span>
              </div>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-dark to-emerald-medium text-white px-3 py-1.5 rounded-full hover:shadow-xl transition-all font-bold text-[10px] whitespace-nowrap flex-shrink-0"
            >
              რეგისტრაცია
            </a>
          </div>

          {/* Mobile Navigation Links */}
          <div className="md:hidden mt-2 flex justify-around border-t border-gold/20 pt-2 gap-1">
            <a
              href="#about"
              className="text-[10px] font-semibold text-emerald-dark hover:text-emerald-medium"
            >
              შესახებ
            </a>
            <a
              href="#course"
              className="text-[10px] font-semibold text-emerald-dark hover:text-emerald-medium"
            >
              ვისთვის
            </a>
            <a
              href="#results"
              className="text-[10px] font-semibold text-emerald-dark hover:text-emerald-medium"
            >
              შედეგები
            </a>
            <a
              href="#packages"
              className="text-[10px] font-semibold text-emerald-dark hover:text-emerald-medium"
            >
              პაკეტები
            </a>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between relative">
            <a
              href="#"
              className="flex items-center gap-4 relative group transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute -top-4 left-0 shadow-2xl z-50">
                <Image
                  src="/logo.jpeg"
                  alt="Psychologos"
                  width={100}
                  height={100}
                  className="relative"
                />
              </div>
              <div className="flex flex-col ml-28">
                <span className="text-3xl font-bold text-emerald-dark tracking-tight">
                  Psychologos
                </span>
                <span className="text-xs text-gold font-semibold tracking-widest">
                  გამაჯანსაღებელი კურსი
                </span>
              </div>
            </a>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <a
                  href="#about"
                  className="relative text-emerald-dark font-semibold group transition-colors hover:text-emerald-medium"
                >
                  კურსის შესახებ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-emerald-medium group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
                <a
                  href="#course"
                  className="relative text-emerald-dark font-semibold group transition-colors hover:text-emerald-medium"
                >
                  ვისთვის არის
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-emerald-medium group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
                <a
                  href="#results"
                  className="relative text-emerald-dark font-semibold group transition-colors hover:text-emerald-medium"
                >
                  შედეგები
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-emerald-medium group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
                <a
                  href="#packages"
                  className="relative text-emerald-dark font-semibold group transition-colors hover:text-emerald-medium"
                >
                  პაკეტები
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-emerald-medium group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-dark to-emerald-medium text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all font-bold text-sm uppercase tracking-wide transform hover:scale-105"
              >
                რეგისტრაცია
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-24 px-4 md:px-6 relative overflow-hidden bg-cream">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 animate-slide-in-left">
              <p className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-emerald-medium font-semibold">
                გამაჯანსაღებელი კურსი
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-emerald-dark">
                აღიდგინე ჯანმრთელობა
                <br />
                <span className="text-emerald-medium">40 დღეში!</span>
              </h1>
              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  არ დაელოდო უკეთეს მომავალს — შენი სხეული და გონება უკვე ფლობს
                  განკურნების ძალას.
                </p>
                <p className="text-sm md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  გაიგე როგორ აამუშაო შენი ბუნებრივი თვითგანკურნების მექანიზმი
                  პრაქტიკული, შედეგზე ორიენტირებული მეთოდით.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-dark text-white px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-full hover:bg-emerald-medium transition-all font-semibold text-base md:text-lg lg:text-xl hover-lift"
                >
                  რეგისტრაცია
                </a>
              </div>
            </div>
            <div className="relative animate-slide-in-right mt-8 lg:mt-0">
              <div className="relative rounded-full overflow-hidden shadow-2xl border-4 md:border-8 border-white max-w-sm md:max-w-md mx-auto animate-scale-in delay-200">
                <Image
                  src="/mainposter.jpeg"
                  alt="გამაჯანსაღებელი კურსი"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              {/* Stats */}
              <div className="absolute -top-4 right-4 md:right-2 lg:-right-4 md:top-6 lg:top-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-3 md:p-4 lg:p-6 text-center animate-fade-in-up delay-300 hover-lift border-2 border-white/60">
                <div className="text-lg md:text-2xl lg:text-3xl font-black text-emerald-dark leading-tight">
                  10 000 000+
                </div>
                <div className="text-[10px] md:text-xs lg:text-sm text-gray-600 font-semibold mt-1">
                  კურსდამთავრებული
                </div>
              </div>
              <div className="absolute -bottom-4 left-4 md:left-2 lg:-left-4 md:bottom-6 lg:bottom-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-2 md:p-4 lg:p-6 text-center animate-fade-in-up delay-400 hover-lift border-2 border-white/60">
                <div className="text-xl md:text-3xl lg:text-4xl font-black text-emerald-dark leading-none">
                  40
                </div>
                <div className="text-[9px] md:text-xs lg:text-sm text-gray-600 font-semibold mt-0.5 md:mt-1">
                  დღიანი პროგრამა
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-emerald-dark leading-tight max-w-4xl mx-auto mb-6">
                ამ მეთოდის მეშვეობოთ 10 მილიონზე მეტმა ადამიანმა აღიდგინა
                ჯანმრთელობა მთელს მსოფლიოში.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                ნორბეკოვის მეთოდი - ასე ეწოდება ფსიქო სომატიკური თვითაღდგენის
                სისტემას, რომლის ბაზაზეც დაფუძნებულია ჩვენი გამაჯანსაღებელი
                კურსი.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation animation="scale">
              <div className="text-center px-6 py-6 bg-cream rounded-2xl hover-lift h-full flex flex-col justify-center items-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-dark mb-3 leading-tight whitespace-nowrap">
                  10 000 000+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  კურსდამთავრებული მსოფლიოში
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale">
              <div className="text-center px-6 py-6 bg-cream rounded-2xl hover-lift h-full flex flex-col justify-center items-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-dark mb-3 leading-tight whitespace-nowrap">
                  20+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  წლიანი გამოცდილება
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale">
              <div className="text-center px-6 py-6 bg-cream rounded-2xl hover-lift h-full flex flex-col justify-center items-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-dark mb-3 leading-tight whitespace-nowrap">
                  40
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  ენაზე ნათარგმნი
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Masterclass Info */}
      <section className="py-32 px-6 bg-gradient-to-br from-emerald-dark via-emerald-medium to-emerald-dark text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-12">
            <ScrollAnimation animation="fade">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 leading-tight">
                  ადგილების რაოდენობა
                  <br />
                  <span className="text-gold">შეზღუდულია</span>
                </h2>
                <p className="text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
                  გამოიყენე შანსი, დაიწყე შენი გაჯანსაღება დღესვე!
                </p>
              </div>
            </ScrollAnimation>
            <div className="pt-8">
              <a
                href="https://docs.google.com/forms/d/1w_akEuJvjDYrEHGiHUx0OJ4ud_wQZHMj6DE9YHJf06A/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-gold hover:bg-gold-light text-emerald-dark px-16 py-8 rounded-full text-2xl font-black shadow-2xl transition-all transform hover:scale-110"
              >
                <span>დარეგისტრირდი მასტერკლასზე</span>
                <span className="text-4xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-8">
              <ScrollAnimation animation="left">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-gold/30 hover:border-gold transition-all transform hover:scale-105 shadow-2xl">
                  <div className="text-gold font-bold text-sm uppercase tracking-widest mb-2">
                    თარიღი
                  </div>
                  <div className="text-3xl font-black">10 ნოემბერი</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="right">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-gold/30 hover:border-gold transition-all transform hover:scale-105 shadow-2xl">
                  <div className="text-gold font-bold text-sm uppercase tracking-widest mb-2">
                    მისამართი
                  </div>
                  <div className="text-2xl font-black">სულხან ნასიძის 20</div>
                </div>
              </ScrollAnimation>
            </div>
            <p className="text-2xl font-light">
              მოგესალმებით, გეპატიჟებით, ჩაერთეთ!
            </p>
          </div>
        </div>
      </section>

      {/* Why Course - HERO VALUE PROPOSITION */}
      <section
        id="about"
        className="py-32 px-6 bg-gradient-to-br from-emerald-dark via-emerald-medium to-emerald-dark text-white relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <p className="text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
              სისტემის საფუძველი
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-8 leading-tight">
              რატომ „გამაჯანსაღებელი კურსი"?
            </h2>
            <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              საყოველთაოდ ცნობილი ფაქტია, რომ ქრონიკული დაავადებების და
              სიმბტომების წარმოშობის მიზეზი უმეტეს შემთხვევაში ფსიქო
              სომატიკურია, რაც ფსიქოლოგიური მიდგომებისა და სტრესის განეიტრალების
              გარეშე ძალზე ართულებს გამოჯანმრთელების პროცესს.
            </p>
          </div>

          {/* Key Message */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 mb-16 border-2 border-white/20 animate-scale-in delay-200">
            <p className="text-2xl lg:text-3xl text-center leading-relaxed font-light">
              გამაჯანსაღებელ კურსზე ჩვენ გამოვიყენებთ{" "}
              <span className="font-bold text-gold">10 განსხვავებულ გზას</span>,
              რათა გავაუმჯობესოთ თვითაღდგენის მექანიზმი და გავაღვიძოთ ჩვენი
              განუსაზღვრელი შესაძლებლობები
            </p>
          </div>

          {/* 10 Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "ყურადღების კონცენტრაციის სავარჯიშოები",
                desc: "გააძლიერე გონების ფოკუსირების უნარი",
              },
              {
                number: "02",
                title: "ფიზიკური ვარჯიში ენერგიის გაათმაგების ეფექტით",
                desc: "გაზარდე სხეულის ენერგეტიკული რესურსები",
              },
              {
                number: "03",
                title: "მედიტაციური სავარჯიშოები",
                desc: "მიაღწიე შინაგან სიმშვიდესა და ჰარმონიას",
              },
              {
                number: "04",
                title: "უძველესი აღმოსავლური პრაქტიკები",
                desc: "ათასწლეული სიბრძნე თანამედროვე მეთოდებში",
              },
              {
                number: "05",
                title: 'ყურადღების და "სიცივე-სითბოს" გადაადგილების ტექნიკები',
                desc: "მართე შენი სხეულის ენერგეტიკული ნაკადები",
              },
              {
                number: "06",
                title: "პოზიტიური მეტყველების პრინციპები",
                desc: "შეცვალე შენი რეალობა სწორი სიტყვებით",
              },
              {
                number: "07",
                title: "ხასიათის თვისებებზე მუშაობის მეთოდოლოგია",
                desc: "გახდი უკეთესი ვერსია შენი თავისა",
              },
              {
                number: "08",
                title: "ენერგეტიკული ოქტავა",
                desc: "აამაღლე შენი ვიბრაციის დონე",
              },
              {
                number: "09",
                title: "სტრესის განეიტრალების და გარდაქმის ტექნიკები",
                desc: "გარდაქმენი ნეგატივი პოზიტიურ ენერგიად",
              },
              {
                number: "10",
                title: "შედეგების ფიქსირების ტექნიკა",
                desc: "დაჩქარებული შესწავლის მეთოდოლოგია",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center text-emerald-dark font-black text-xl group-hover:scale-110 transition-transform">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-emerald-dark px-12 py-5 rounded-full text-xl font-bold shadow-2xl transition-all hover-lift"
            >
              დაიწყე შენი გარდაქმნა დღესვე
            </a>
          </div>
        </div>
      </section>

      {/* Norbekov Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-dark mb-4">
                ვინ არის მირზაკარიმ ნორბეკოვი და რას მოიცავს მისი მეთოდი?
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="left">
              <div className="rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/norbekov.jpg"
                  alt="მირზაკარიმ ნორბეკოვი"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full aspect-square"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="right">
              <div className="space-y-4 text-gray-700">
                <p>
                  აკადემიკოსი მირზაკარიმ ნორბეკოვი დღესდღეობით რამდენიმე
                  მიმართულებითაა ცნობილი. პირველ რიგში, ის ფსიქოსომატიკური
                  თვითრეგულაციის ანუ ე.წ. ნორბეკოვის სისტემის შემქმნელი გახლავთ.
                  ეს არის ის ფსიქოლოგიური მიდგომები, რომელიც მან საკუთარ თავზე
                  გამოსცადა და ფაქტობრივად, განუკურნებელი დაავადებისგან
                  განიკურნა. განკურნების შემდეგ მან ეს მეთოდები ერთ მთლიან
                  სისტემად აქცია, რომლის შექმნაც 40 წლის წინ დაიწყო. უკვე 20-25
                  წელია, რაც ნორბეკოვის სისტემას მთელი მსოფლიო იცნობს.
                </p>
                <p>
                  სხვაგვარად რომ ვთქვათ, ეს საკუთარ თავზე მუშაობისა და პიროვნული
                  ზრდის სისტემაა.
                </p>
                <p>
                  გარდა ამ სისტემისა, ნორბეკოვი მისი წიგნებითაც ცნობილია. მისი
                  ავტორობით, გამოქვეყნდა არა ერთი წიგნი-ტრენინგი, რომელიც
                  დაწერილია მარტივი, პოპულარული ენით და თან, გარკვეულ
                  ფსიქოლოგიურ შიგთავსს მოიცავს. ოცი წლის წინ, მისმა წიგნმა,
                  რომელსაც „სულელის გამოცდილება" ჰქვია, რეკორდი მოხსნა.
                </p>
                <p className="font-semibold">
                  ამ წიგნის ტირაჟი დღეს 40 მილიონია და ნათარგმნია, ფაქტობრივად,
                  მსოფლიოს ყველა ენაზე, მათ შორის, ქართულად.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Khatuna Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="left">
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-bold">ხათუნა მუზაშვილი</span> -
                  ფსიქოლოგი, ნლპ პრაქტიკოსი, არტ თერაპევტი, სხეულზე
                  ორიენტირებული თერაპიის სპეციალისტი, ნორბეკოვის სისტემის
                  ქართულენოვანი ტრენერი, რომელმაც გამაჯანსაღებელი სისტემა
                  საქართველოში შემოიტანა.
                </p>
                <p>
                  ოდესღაც მისი ისტორიაც „გამაჯანსაღებელი კურსით" დაიწყო, როდესაც
                  მან ქრონიკული დაავადებებით დატრვირთულმა შეაბიჯა ნორბეკოვის
                  სისტემის კურსდამთავრებულთა რიგებში და სრულად მოახერხა თავისი,
                  როგორც ფიზიკური, აგრეთვე მენტალური ჯანმრთელობის აღდგენა.
                </p>
                <p className="font-semibold">
                  ხათუნა მუზაშვილი 20 წელზე მეტია ატარებს ტრენინგებს, როგორც
                  საქართველოში ასევე მის ფარგლებს გარეთ და უამრავ ადამიანს
                  ეხმარება ცხოვრების ბალანსის აღდგენასა და გამოჯანმრთელებაში.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="right">
              <a
                href="https://docs.google.com/forms/d/1w_akEuJvjDYrEHGiHUx0OJ4ud_wQZHMj6DE9YHJf06A/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer group"
              >
                <div className="rounded-full overflow-hidden border-8 border-white shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:scale-105">
                  <Image
                    src="/xatunamuzashvili.jpg"
                    alt="ხათუნა მუზაშვილი"
                    width={3200}
                    height={3200}
                    className=""
                  />
                </div>
              </a>
            </ScrollAnimation>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://docs.google.com/forms/d/1w_akEuJvjDYrEHGiHUx0OJ4ud_wQZHMj6DE9YHJf06A/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-dark to-emerald-medium text-white px-12 py-6 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105"
            >
              <span>
                შენი გარდაქმნა ერთი გადაწყვეტილებით იწყება — დარეგისტრირდი
                მასტერკლასზე
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section id="course" className="py-20 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-emerald-dark mb-6">
              ვისთვის არის ეს კურსი?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ჩვენი საზოგადოება მოიცავს ყველა ასაკისა და პროფესიის ადამიანებს,
              რომლებიც ერთად აღმოაჩენენ თვითგანვითარების გზას
            </p>
          </div>

          {/* Testimonial Style Gallery */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group rounded-3xl overflow-hidden shadow-xl hover-lift">
              <Image
                src="/IMG_4929.jpg"
                alt="ჯგუფური პრაქტიკა"
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-700 scale-150"
                style={{ objectPosition: "70% 60%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    ჯგუფური პრაქტიკა
                  </h3>
                  <p className="text-white/90">ერთად ვაღწევთ უკეთეს შედეგებს</p>
                </div>
              </div>
            </div>
            <div className="relative group rounded-3xl overflow-hidden shadow-xl hover-lift">
              <Image
                src="/IMG_5576.jpg"
                alt="პრაქტიკული სავარჯიშოები"
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    პრაქტიკული სავარჯიშოები
                  </h3>
                  <p className="text-white/90">თეორია ქმნის პრაქტიკაში</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "თუ გრძნობ, რომ მზად ხარ ახალი გააზრებული ცხოვრება დაიწყო, სადაც შენ იქნები შენი ჯანმრთელობის, ემოციების და აზრების მმართველი, ეს კურსი შენთვისაა",
              "ჩვენ შევქმნეთ ეს პროგრამა მათთვის, ვინც ოცნებობს მშვიდობასა და სიხარულზე ოჯახში და გარშემომყოფებთან",
              "ვისაც მოსწყინდა მუდმივი პაციენტის როლში ყოფნა და საკუთარი არა სრულფასოვნების განცდა",
              "ვინც მზად არის საკუთარ თავზე აიღოს გამოჯანმრთელების პასუხისმგებლობა",
              "ვისაც გულის სიღრმეში ყოველთვის სჯეროდა, რომ ადამიანის შესაძლებლობები ამოუწურავია",
              'ვინც იცის, რომ მის ორგანიზმს სასწაულების მოხდენა შეუძლია, თუმცა არ იცის როგორ "ჩართოს" ეს თვითაღდგენის მექანიზმი',
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border-l-4 border-gold"
              >
                <p className="text-emerald-dark flex items-start gap-3">
                  <span className="text-gold text-xl">*</span>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://docs.google.com/forms/d/1w_akEuJvjDYrEHGiHUx0OJ4ud_wQZHMj6DE9YHJf06A/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-dark to-emerald-medium text-white px-12 py-6 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105"
            >
              <span>დარეგისტრირდი მასტერკლასზე — ადგილები სწრაფად ივსება</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-dark mb-4">
              რას მიიღებთ?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "შეისწავლით ძველი აღმოსავლური მედიცინის განსაკუთრებულ ტექნიკებს, რომლებიც დაგეხმარებათ საკუთარ სხეულს დაუბრუნოთ შემოქმედებითობა, ენერგია და შინაგანი სიმშვიდე",
              "აღიდგენთ ჯანმრთელობას და რაც მთავარია ისწავლით როგორ მართოთ იგი თავად მომავალში",
              "შეძლებთ გაუმკლავდეთ ქრონიკულ დაავადებებს და დაინახოთ მათი წარმოშობის სათავე",
              "მეტად შეიყვარებთ საკუთარ თავს და ორგანიზმს, რომელიც წლებია თქვენ სიცოცხლეს ემსახურება",
              "მოიშორებთ შიშებს და კომპლექსებს, რომლებიც თავისუფოლებას გიზღუდავთ",
              "დაიბრუნებთ სიხარულისა და ცხოვრებით ტკბობის განცდას",
            ].map((item, index) => (
              <div key={index} className="p-6 bg-cream rounded-xl">
                <p className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold text-xl">*</span>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 space-y-6">
            <p className="text-xl text-gray-700">
              ეს კურსი არის თქვენი შინაგანი რესურსების აღმოჩენა და მიზნების
              მიღწევის შესაძლებლობა.
            </p>
            <p className="text-2xl font-bold text-emerald-dark">
              შედეგები პირველივე დღიდან იწყება!
            </p>
            <a
              href="https://docs.google.com/forms/d/1w_akEuJvjDYrEHGiHUx0OJ4ud_wQZHMj6DE9YHJf06A/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gold text-emerald-dark px-12 py-6 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105"
            >
              <span>დარეგისტრირდი მასტერკლასზე</span>
            </a>
            <p className="text-lg text-gray-700">
              შემოგვიერთდით და დაინახეთ, როგორ იწყება ცხოვრება ახალი ფერებით!
            </p>
          </div>
        </div>
      </section>

      {/* Khatuna Bio */}
      <section className="py-20 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-dark mb-4">
              კურსს ატარებს ხათუნა მუზაშვილი
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-medium/10 rounded-3xl aspect-video flex items-center justify-center overflow-hidden">
                <VideoPlayer
                  src="/lightgreen.mp4"
                  className="w-full h-full object-cover [&:fullscreen]:object-contain"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
              <div className="bg-emerald-medium/10 rounded-3xl aspect-video flex items-center justify-center overflow-hidden">
                <video
                  className="w-full h-full object-cover [&:fullscreen]:object-contain"
                  style={{ objectPosition: "50% 20%" }}
                  controls
                  preload="metadata"
                >
                  <source src="/newxatuna.mp4" type="video/mp4" />
                  თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ჩვენებას.
                </video>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                ფსიქოლოგი, ნლპ პრაქტიკოსი, არტ თერაპევტი, სხეულზე ორიენტირებული
                თერაპიის სპეციალისტი, ნორბეკოვის სისტემის ქართულენოვანი ტრენერი.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-dark mb-4">
              ჩვენი მსმენელების შედეგები
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">
              მარიამ მუზაშვილს აქვს 2 მსმენელის ვიდეო შედეგი ქეთი რუხაიასი და
              ქეთევან გაჩეჩილაძის.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream rounded-2xl p-8 shadow-sm">
              <div className="rounded-xl aspect-video mb-4 overflow-hidden bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/ruxia.mp4" type="video/mp4" />
                  თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ჩვენებას.
                </video>
              </div>
              <h3 className="font-bold text-emerald-dark">ქეთი რუხაია</h3>
              <p className="text-gray-600 text-sm">კურსის შედეგი</p>
            </div>
            <div className="bg-cream rounded-2xl p-8 shadow-sm">
              <div className="rounded-xl aspect-video mb-4 overflow-hidden bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/qeti.mp4" type="video/mp4" />
                  თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ჩვენებას.
                </video>
              </div>
              <h3 className="font-bold text-emerald-dark">
                ქეთევან გაჩეჩილაძე
              </h3>
              <p className="text-gray-600 text-sm">კურსის შედეგი</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mb-8">
            ესეც შედეგებია და კომენტარებად დავტოვოთ ფოტოს გარეშე
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "მაკა ლაბაძე",
                text: "კურსის შედეგად დავიწყე პოზიტიური აზროვნება და სტრესულ სიტუაცებს ვუმკლავდები მარტივად. მომიწესრიგდა ძილი, გავხდი მხიარული.",
              },
              {
                name: "ეთო კარელიძე",
                text: "ამ კურსზე ძალიან დათრგუნული მოვედი და თავისუფლად შემიძლია ვთქვა, რომ ამ მეთოდმა დამიბრუნა საკუთარი თავის რწმენა, სილამაზის აღქმა და ბედნიერების შეგრძნება.",
              },
              {
                name: "ქეთი გაჩეჩილაძე",
                text: "ამ კურსის გავლის შემდგე ჩემი ცხოვრება ორად გაიყო - გაჯანსაღებამდე და გამაჯანსაღებლის მერე. ემოციების მართვასთან და წვრილ-წვრილი ჯანმრთელობის პრობლემების მოგვარებასთან ერთად, მთელი ჩემი ცხოვრება შეიცვალა - გავხდი თავდაჯერებული, მიზანმიმართული, ბედნიერი. შეიცვალა ჩემი წარმატების მდგომარეობაც. კიდევ ერთხელ მინდა ხაზი გავუსვა იმ ფაქტს, რომ ცხოვრებაში ყველაფერი ურთიერთკავშირშია.",
              },
              {
                name: "ქეთი რუხაია",
                text: "გამაჯანსაღებელი კურსის ჩემი ყველაზე დიდი შედეგი, არის მხედველობის აღდგენა. ვხმარობდი სათვალეს, რომელსაც ასაკობრივ სათვალეს ვეძახდი, თუმცა ამ კურსზე მივხვდი რომ ასაკი არაფერ შუაშია. წლებია ვინარჩუნებ შედეგს და აბსოლუტურ მხედველობას.",
              },
              {
                name: "დიანა უნაფქოშვილი",
                text: "ნორბეკოვის გამაჯანსაღებელ კურსზე, როდესაც მივედი, განვიცდიდი ძლიერ სულიერ ტკივილს. ამის გამო დარღვეული მქონდა სუნთქვა, მაწუხებდა უძილობა და შინაგანი სიცარიელე. პირველივე დღეს, ტრენინგის პროცესში ვიგრძენი, რომ სუნთქვა გამიუმჯობესდა, რამდენიმე დღეში მომემატა ხალისი, მომიწესრიგდა ძილი და მხედველობა. აქ მიღებულმა პრაქტიკულმა და თეორიულმა ცოდნამ, მოახდინა საოცარი ტრანსფორმაცია, რომლის პოზიტიური შედეგები, თვალსაჩინოა ყოველდღიურ ცხოვრებაში.",
              },
              {
                name: "მაია მელაშვილი",
                text: "საოცარი კურსია საოცარი შედეგებით. სულ რაღაც 2 დღეში გამიარა: კისრის, ხერხემლის, წელის ტკივილმა, მომემატა ენერგია და თავდაჯერებულობა, გამიუმჯობესდა მხედველობა, დავიკელი 3 კილო 1 კვირაში, თითქოს ახლიდან დავიბადე. მადლობა დიდი💚",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-cream rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold text-emerald-dark">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">(ფოტო გალერეა)</p>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-dark mb-4">
              კურსის მსმენელებმა ჩვენი მეთოდების დახმარებით შეძლეს თვითონ
              მოეხდინათ ისეთი დაავადებებისგან გათავისუფლება, როგორებიცაა:
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "გულ-სისხლძარღვთა სისტემის დაავადებები",
              "ხერხემლის რიგი პათოლოგიები, სკოლიოზი",
              "ვენების ვარიკოზული გაგანიერება",
              "მხედველობის პრობლემები",
              "სმენის დარღვევები",
              "ჰიპერ- და ჰიპოტონია",
              "ჰორმონალური ფონის დარღვევა",
              "საშარდე გზების კუნთების ტონუსის დაქვეითება",
              "სქესობრივი აქტივობის შემცირება",
              "მიომა და ფიბრომა",
              "საკვერცხის ანთება",
              "უნაყოფობა",
              "მასტოპათია",
              "პროსტატიტი",
              "სახისა და სხეულის გაახალგაზრდავება",
              "ქრონიკული და მწვავე ტკივილებისგან გათავისუფლება",
              "საერთო განწყობისა და შრომისუნარიანობის გაუმჯობესება",
              "მხედველობის და სმენის აღდგენა",
            ].map((condition, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-emerald-dark flex items-start gap-2">
                  <span className="text-gold">*</span>
                  <span>{condition}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-dark mb-4">
              სად ტარდება ტრენინგები?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-emerald-dark">
              ლოკაცია და თარიღები:
            </h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-center text-lg text-gray-700">
            <p>
              <span className="font-bold">დაწყება:</span> 10 ნოემბერი
            </p>
            <p>
              <span className="font-bold">მისამართი:</span> სულხან ნასიძის 20 –
              ფსიქოლოგოსი
            </p>
            <p>
              <span className="font-bold">დამატებითი ინფორმაცია:</span> 595 281
              855 | 555 658 865
            </p>
            <p className="text-2xl font-bold text-emerald-dark pt-6">
              გააღვიძე შენი სხეულის და გონების თვითგანკურნების მექანიზმი.
            </p>
            <p className="text-xl font-bold text-gold">
              ადგილების რაოდენობა შეზღუდულია!
            </p>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-emerald-dark hover:bg-emerald-medium text-white px-12 py-6 rounded-full text-xl font-semibold transition-all"
            >
              <span>დარეგისტრირდი</span>
            </a>
          </div>
          {/* Experience Gallery Section */}
          <div className="mt-20 bg-gradient-to-br from-cream to-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <p className="text-emerald-medium text-sm uppercase tracking-widest mb-3 font-semibold">
                ჩვენი ატმოსფერო
              </p>
              <h3 className="text-4xl font-bold text-emerald-dark mb-4">
                ნახე როგორ გამოიყურება ტრენინგები
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                რეალური ადამიანები, რეალური გარდაქმნები. ეს არის თქვენი მომავალი
                საზოგადოება.
              </p>
            </div>

            {/* Featured Large Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift group">
              <div className="relative aspect-[21/9]">
                <Image
                  src="/IMG_8262.jpg"
                  alt="გამაჯანსაღებელი კურსი"
                  width={1200}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white text-xl font-semibold">
                    მთავარი სესია - სრული ჩართულობა
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-center py-4 sm:py-0">
                <div className="text-3xl md:text-4xl font-bold text-emerald-dark mb-1">
                  10 000 000+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  კურსდამთავრებული მსოფლიოში
                </div>
              </div>
              <div className="text-center py-4 sm:py-0 border-y sm:border-y-0 sm:border-x border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-emerald-dark mb-1">
                  20+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  წლიანი გამოცდილება
                </div>
              </div>
              <div className="text-center py-4 sm:py-0">
                <div className="text-3xl md:text-4xl font-bold text-emerald-dark mb-1">
                  40
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  ენაზე ნათარგმნი
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="packages"
        className="py-32 px-6 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl lg:text-7xl font-black text-emerald-dark">
              კურსზე დასწრების პაკეტები:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Masterclass */}
            <div className="group bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-gold hover-lift flex flex-col">
              <div className="text-center space-y-6 flex-grow">
                <h3 className="text-2xl font-black text-emerald-dark">
                  ჯანმრთელობის მასტერკლასი
                </h3>
                <p className="text-gray-600">ერთდღიანი ტრენინგი</p>
                <div>
                  <div className="text-6xl font-black bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    50₾
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 pt-6">
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-gold text-xl font-bold">-</span>
                      <span className="text-gray-700">
                        10 ნოემბერი 19:00 საათი
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://docs.google.com/forms/d/1w_akEuJvjDYrEHGiHUx0OJ4ud_wQZHMj6DE9YHJf06A/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-dark hover:bg-emerald-medium text-white text-center px-8 py-4 rounded-full font-semibold transition-all mt-6"
              >
                დარეგისტრირდი მასტერკლასზე
              </a>
            </div>

            {/* Online */}
            <div className="group bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-gold hover-lift flex flex-col">
              <div className="text-center space-y-6 flex-grow">
                <h3 className="text-2xl font-black text-emerald-dark">
                  გამაჯანსაღებელი კურსი
                </h3>
                <p className="text-gray-600">ონლაინ ვერსია</p>
                <div>
                  <div className="text-6xl font-black bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    350₾
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 pt-6">
                  <ul className="space-y-4 text-left text-sm">
                    <li className="text-gray-700">
                      10 დღიანი ონლაინ კურსი, საჩუქრად ერთთვიანი ექსკლუზიური
                      აუდიო ვიდეო მარათონი (10, 11, 12, 13, 14, 17, 18, 19, 20,
                      21 ნოემბერი)
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-dark hover:bg-emerald-medium text-white text-center px-8 py-4 rounded-full font-semibold transition-all mt-6"
              >
                დაჯავშნე შენი ადგილი დღესვე
              </a>
            </div>

            {/* Standard */}
            <div className="group relative bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-10 border-4 border-gold hover-lift flex flex-col">
              <div className="text-center space-y-6 flex-grow">
                <h3 className="text-2xl font-black text-emerald-dark">
                  გამაჯანსაღებელი კურსი
                </h3>
                <p className="text-gray-700 font-bold">ადგილზე დასწრებით</p>
                <div>
                  <div className="text-6xl font-black bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    650₾
                  </div>
                </div>
                <div className="border-t-2 border-gold/30 pt-6">
                  <ul className="space-y-4 text-left text-sm">
                    <li className="text-gray-700">
                      10 დღე ადგილზე დასწრება 19:00- 22:00 საათი
                    </li>
                    <li className="text-gray-700">
                      30 დღიანი ექსკლუზიური აუდიო ვიდეო მარათონი, რომელიც
                      მოიცავს დავალებებს, უნიკალურ მედიტაციებს და ტექნიკებს
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-dark hover:bg-emerald-medium text-white text-center px-8 py-4 rounded-full font-semibold transition-all mt-6"
              >
                დაჯავშნე შენი ადგილი დღესვე
              </a>
            </div>

            {/* VIP */}
            <div className="group bg-gradient-to-br from-emerald-dark via-emerald-medium to-emerald-dark text-white rounded-3xl p-10 border-4 border-gold relative overflow-hidden hover-lift flex flex-col">
              <div className="text-center space-y-6 relative z-10 flex-grow">
                <h3 className="text-2xl font-black">გამაჯანსაღებელი კურსი</h3>
                <p className="font-bold">VIP ფორმატი</p>
                <div>
                  <div className="text-6xl font-black text-gold">850₾</div>
                </div>
                <div className="border-t-2 border-white/20 pt-6">
                  <ul className="space-y-4 text-left text-sm">
                    <li>10 დღე ადგილზე დასწრება 19:00- 22:00 საათი</li>
                    <li>
                      30 დღიანი ექსკლუზიური აუდიო ვიდეო მარათონი, რომელიც
                      მოიცავს დავალებებს, უნიკალურ მედიტაციებს და ტექნიკებს
                    </li>
                    <li className="font-bold">
                      დამატებითი ინდივიდუალური მუშაობა მენტორთან (სიმბტომის
                      განლაგება)
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedu3wdDuFmHXNg9smszm9NXq7QPrKGyONSgriGGcwOXeJqww/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold hover:bg-gold-light text-emerald-dark text-center px-8 py-4 rounded-full font-semibold transition-all mt-6 relative z-10"
              >
                დაჯავშნე შენი ადგილი დღესვე
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-emerald-dark font-bold">
              რაოდენობა შეზღუდულია!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-emerald-dark border-t-2 border-gold/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/mandala_transparent.png"
                alt="Mandala"
                width={80}
                height={80}
                className="relative"
              />
            </div>
            <p className="text-gold/80 text-lg">გამაჯანსაღებელი კურსი</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm">
                © 2024 გამაჯანსაღებელი კურსი. ყველა უფლება დაცულია.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
