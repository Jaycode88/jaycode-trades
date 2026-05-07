import { useEffect, useState } from "react"

const notifications = [
  { name: "Mike T.", message: "Need a full bathroom refit, when are you free?", time: "Just now" },
  { name: "Sarah K.", message: "Boiler making a noise, can you come take a look?", time: "Just now" },
  { name: "Dave R.", message: "Looking for a quote on a new consumer unit", time: "Just now" },
  { name: "Lisa M.", message: "Need garden landscaping done, what are your rates?", time: "Just now" },
]

function WhatsAppNotification({ notification, visible }) {
  return (
    <div
      style={{
        transform: visible ? "translateX(0)" : "translateX(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease",
      }}
      className="bg-white rounded-2xl shadow-2xl p-4 flex items-start gap-3 w-72"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.86L.057 23.428a.75.75 0 00.916.916l5.568-1.477A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 01-4.964-1.365l-.355-.213-3.684.976.977-3.587-.233-.368A9.698 9.698 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">WhatsApp</span>
          <span className="text-xs text-gray-400">{notification.time}</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 mb-0.5">{notification.name}</p>
        <p className="text-sm text-gray-600 leading-snug truncate">{notification.message}</p>
      </div>
    </div>
  )
}

function Hero() {
  const [visible, setVisible] = useState(false)
  const [notifVisible, setNotifVisible] = useState(false)
  const [currentNotif, setCurrentNotif] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cycle = () => {
      setNotifVisible(false)
      setTimeout(() => {
        setCurrentNotif((prev) => (prev + 1) % notifications.length)
        setNotifVisible(true)
        setTimeout(() => {
          setNotifVisible(false)
        }, 3500)
      }, 600)
    }

    const initial = setTimeout(() => {
      setNotifVisible(true)
      setTimeout(() => setNotifVisible(false), 3500)
    }, 1400)

    const interval = setInterval(cycle, 5000)

    return () => {
      clearTimeout(initial)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="min-h-screen bg-[#0C1F3F] flex items-center pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.1s",
              }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8FF47] animate-pulse" />
              <span className="text-white/80 text-sm">Essex-based web developer</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.25s",
              }}
              className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Websites that send
              <br />
              every enquiry to your
              <br />
              <span className="text-[#E8FF47]">WhatsApp</span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.4s",
              }}
              className="text-[#7BA3CC] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Built for plumbers, electricians and builders across Essex.
              Never miss a job again — enquiries hit your phone in seconds, not hours.
            </p>

            {/* CTAs */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.55s",
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="bg-[#E8FF47] text-[#0C1F3F] font-bold px-8 py-4 rounded-lg text-base hover:brightness-110 transition-all duration-200 text-center"
              >
                Get a free quote
              </a>
              <a
                href="#how-it-works"
                className="border border-white/25 text-white px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-all duration-200 text-center"
              >
                See how it works
              </a>
            </div>

            {/* Social proof bar */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.7s ease",
                transitionDelay: "0.8s",
              }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">7 days</span>
                <span className="text-[#7BA3CC] text-xs">Average build time</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">100%</span>
                <span className="text-[#7BA3CC] text-xs">UK based support</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Essex</span>
                <span className="text-[#7BA3CC] text-xs">Local specialist</span>
              </div>
            </div>

          </div>

          {/* Right — animated notification demo */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              transitionDelay: "0.6s",
            }}
            className="flex-1 flex flex-col items-center justify-center relative w-full max-w-sm mx-auto"
          >

            {/* Phone mockup */}
            <div className="relative bg-[#1a3460] border border-white/20 rounded-3xl p-6 w-full shadow-2xl">

              {/* Mock browser bar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <div className="flex-1 bg-white/10 rounded-full h-5 ml-2 flex items-center px-3">
                  <span className="text-white/40 text-xs">yoursite.co.uk/contact</span>
                </div>
              </div>

              {/* Mock contact form */}
              <div className="space-y-3">
                <div>
                  <div className="text-white/50 text-xs mb-1">Your name</div>
                  <div className="bg-white/10 rounded-lg h-8 flex items-center px-3">
                    <span className="text-white/70 text-sm">Mike Thompson</span>
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">Phone number</div>
                  <div className="bg-white/10 rounded-lg h-8 flex items-center px-3">
                    <span className="text-white/70 text-sm">07911 123456</span>
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">What do you need?</div>
                  <div className="bg-white/10 rounded-lg h-16 flex items-start p-3">
                    <span className="text-white/70 text-sm">Need a full bathroom refit...</span>
                  </div>
                </div>
                <div className="bg-[#E8FF47] rounded-lg h-9 flex items-center justify-center">
                  <span className="text-[#0C1F3F] text-sm font-bold">Send enquiry</span>
                </div>
              </div>

              {/* Animated arrow */}
              <div className="flex items-center justify-center my-4">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-px bg-[#E8FF47]/60" />
                  <div className="w-2 h-2 border-r-2 border-t-2 border-[#E8FF47]/60 rotate-45 -ml-1" />
                </div>
                <span className="text-[#7BA3CC] text-xs mx-3">instantly delivered to</span>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-px bg-[#E8FF47]/60" />
                  <div className="w-2 h-2 border-r-2 border-t-2 border-[#E8FF47]/60 rotate-45 -ml-1" />
                </div>
              </div>

            </div>

            {/* Floating WhatsApp notification */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8">
              <WhatsAppNotification
                notification={notifications[currentNotif]}
                visible={notifVisible}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
