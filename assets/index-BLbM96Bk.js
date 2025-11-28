import i,{useState as u,useEffect as w}from"https://esm.sh/react@18.3.1?dev";import O from"https://esm.sh/react-dom@18.3.1/client?dev";import{useLocation as b,Link as r,NavLink as W,Routes as D,Route as p,HashRouter as L}from"https://esm.sh/react-router-dom@6.22.3?dev&deps=react@18.3.1,react-dom@18.3.1";import{motion as l,AnimatePresence as R}from"https://esm.sh/framer-motion@10.18.0?dev&deps=react@18.3.1,react-dom@18.3.1";import c from"https://esm.sh/htm@3";import{FiX as I,FiMenu as M,FiPhone as k,FiMail as C,FiFacebook as H,FiInstagram as z,FiLinkedin as G,FiHome as S,FiLayers as F,FiBriefcase as E,FiWind as q,FiDroplet as T,FiMapPin as Q}from"https://esm.sh/react-icons@5.2.1/fi?dev&deps=react@18.3.1";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const V=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/services",label:"Services"},{to:"/booking",label:"Booking"},{to:"/contact",label:"Contact"}],h=c.bind(i.createElement),K=()=>{const[e,t]=u(!1),{pathname:n}=b();return w(()=>{t(!1)},[n]),h`
    <header className="navbar">
      <div className="nav-inner">
        <${r} to="/" className="brand">
          <span className="brand-mark">SC</span>
          <div>
            <div className="brand-name">Scarborough CleanCo</div>
            <div className="brand-sub">Premium Cleaning</div>
          </div>
        <//>
        <nav className=${`nav-links ${e?"open":""}`}>
          ${V.map(o=>h`
                <${W}
                  key=${o.to}
                  to=${o.to}
                  className=${({isActive:a})=>`nav-link ${a?"active":""}`}
                >
                  ${o.label}
                <//>
              `)}
        </nav>
        <div className="nav-actions">
          <${r} to="/booking" className="btn btn-primary full-mobile">
            Book a Cleaning
          <//>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick=${()=>t(o=>!o)}
          >
            ${e?h`<${I} />`:h`<${M} />`}
          </button>
        </div>
      </div>
    </header>
  `},U=c.bind(i.createElement),X=()=>U`
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-name">Scarborough CleanCo</div>
          <p className="muted">
            Premium cleaning services tailored to homes, offices, and short-term stays across Scarborough.
          </p>
          <div className="footer-contact">
            <span><${k} /> (647) 555-1188</span>
            <span><${C} /> hello@scarboroughcleanco.com</span>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <${r} to="/about">About<//>
          <${r} to="/services">Services<//>
          <${r} to="/booking">Book a Cleaning<//>
          <${r} to="/contact">Contact<//>
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <${H} />
            </a>
            <a href="#" aria-label="Instagram">
              <${z} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <${G} />
            </a>
          </div>
          <p className="muted">(c) ${new Date().getFullYear()} Scarborough CleanCo</p>
        </div>
      </div>
    </footer>
  `,Y=c.bind(i.createElement),x=({icon:e,title:t,description:n})=>Y`
    <${l.div}
      className="service-card"
      whileHover=${{y:-6,boxShadow:"0 18px 40px rgba(15, 30, 60, 0.12)"}}
      transition=${{type:"spring",stiffness:260,damping:18}}
    >
      <div className="service-icon">
        <${e} />
      </div>
      <h3>${t}</h3>
      <p>${n}</p>
    <//>
  `,j=[{title:"Home Cleaning",icon:S,description:"Scheduled or one-off home cleaning with meticulous detail and care."},{title:"Deep Cleaning",icon:F,description:"Top-to-bottom deep cleans for moves, renovations, and seasonal refreshes."},{title:"Office Cleaning",icon:E,description:"Discreet, reliable office cleaning that keeps workspaces pristine."},{title:"Airbnb Turnover",icon:q,description:"Fast, five-star turnovers with linen service for short-term rentals."},{title:"Carpet & Window",icon:T,description:"Crystal-clear windows and refreshed carpets with eco-safe products."}],f=c.bind(i.createElement),J=()=>f`
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <${l.p}
            className="eyebrow"
            initial=${{opacity:0,y:10}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.1}}
          >
            Scarborough CleanCo
          <//>
          <${l.h1}
            initial=${{opacity:0,y:14}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.15}}
          >
            Premium Cleaning Services in Scarborough
          <//>
          <${l.p}
            className="lede"
            initial=${{opacity:0,y:16}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.2}}
          >
            Reliable, affordable, and spotless cleaning for homes & businesses. Trusted local experts delivering a sleek, healthy space every visit.
          <//>
          <${l.div}
            className="hero-actions"
            initial=${{opacity:0,y:18}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.25}}
          >
            <${r} to="/booking" className="btn btn-primary full-mobile">
              Book a Cleaning
            <//>
            <${r} to="/services" className="btn btn-ghost full-mobile">
              View Services
            <//>
          <//>
          <div className="hero-stats">
            <div>
              <strong>10+ years</strong>
              <span>Experience in GTA East</span>
            </div>
            <div>
              <strong>2500+</strong>
              <span>Cleanings completed</span>
            </div>
            <div>
              <strong>4.9 rating</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="glass-card">
            <p className="muted">Trusted by families & businesses</p>
            <div className="tags">
              <span>Fully insured</span>
              <span>Background checked</span>
              <span>Eco-friendly options</span>
            </div>
            <div className="panel-highlight">
              <h3>Next-day availability</h3>
              <p>Book today and we can be on-site as early as tomorrow morning.</p>
              <${r} to="/booking" className="link">
                Schedule now ->
              <//>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>Cleaning that fits your space</h2>
          <p className="muted">
            From spotless condos to gleaming offices, we tailor every clean to your schedule, surfaces, and standards.
          </p>
        </div>
        <div className="service-grid">
          ${j.map(e=>f`<${x} key=${e.title} ...${e} />`)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2>Precise, professional, and local</h2>
          <ul className="feature-list">
            <li>
              <span className="feature-dot" />
              Bonded, insured, and WSIB-compliant cleaners for peace of mind.
            </li>
            <li>
              <span className="feature-dot" />
              Consistent teams, clear checklists, and quality control every visit.
            </li>
            <li>
              <span className="feature-dot" />
              Quiet, low-scent products with eco-friendly options on request.
            </li>
            <li>
              <span className="feature-dot" />
              Flexible schedules for homes, offices, and short-term rentals.
            </li>
          </ul>
        </div>
        <div className="cta-card">
          <h3>Ready for a spotless space?</h3>
          <p className="muted">
            Share your space details and preferences—we will tailor a plan and confirm quickly.
          </p>
          <${r} to="/booking" className="btn btn-primary full">
            Start Booking
          <//>
          <div className="cta-note">
            <strong>Need same-day?</strong>
            <span>Call (647) 555-1188 and we will prioritize your request.</span>
          </div>
        </div>
      </section>
    </div>
  `,Z=c.bind(i.createElement),_=()=>Z`
    <div className="page">
      <section className="section">
        <div className="section-header">
          <p className="eyebrow">About Scarborough CleanCo</p>
          <h2>Trusted cleaning experts with 10+ years of experience</h2>
          <p className="muted">
            We are a locally-owned cleaning company serving Scarborough and the eastern GTA. Our seasoned team is fully insured, background checked, and trained to deliver consistent, meticulous results.
          </p>
        </div>
        <div className="about-grid">
          <${l.div}
            className="about-card"
            initial=${{opacity:0,y:10}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.1}}
          >
            <h3>Professional cleaners</h3>
            <p>
              Every specialist on our team follows detailed checklists, arrives with premium supplies, and respects your space and schedule.
            </p>
          <//>
          <${l.div}
            className="about-card"
            initial=${{opacity:0,y:10}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.15}}
          >
            <h3>Trusted by locals</h3>
            <p>
              We maintain long-term relationships with homeowners, property managers, and office directors across Scarborough and the Beaches.
            </p>
          <//>
          <${l.div}
            className="about-card"
            initial=${{opacity:0,y:10}}
            animate=${{opacity:1,y:0}}
            transition=${{delay:.2}}
          >
            <h3>Reliable systems</h3>
            <p>
              Clear communication, reminders, and post-clean quality checks keep every visit predictable, spotless, and on time.
            </p>
          <//>
        </div>
      </section>
    </div>
  `,v=c.bind(i.createElement),y=[{title:"Home Cleaning",icon:S,description:"Routine maintenance cleans that keep kitchens, bathrooms, bedrooms, and living areas tidy and hygienic.",details:"Weekly, bi-weekly, or monthly schedules with the same trusted team."},{title:"Deep Cleaning",icon:F,description:"Detailed cleaning for move-ins, move-outs, renovations, or spring refreshes with extra focus on high-touch areas.",details:"Includes baseboards, inside appliances, vents, grout detail, and more."},{title:"Office Cleaning",icon:E,description:"Discreet office cleaning that keeps boardrooms, desks, kitchens, and washrooms immaculate for staff and guests.",details:"After-hours or early-morning schedules to match your operations."},{title:"Airbnb Turnover",icon:q,description:"Fast turnovers with linen change, staging, and amenity restock to secure five-star guest reviews.",details:"Photo-ready staging with checklist verification after every stay."},{title:"Carpet & Window",icon:T,description:"Streak-free window cleaning and carpet refreshes that brighten interiors and extend material life.",details:"Eco-safe solutions that protect finishes and indoor air quality."}],ee=()=>v`
    <div className="page">
      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>Precision cleaning for every space</h2>
          <p className="muted">
            Choose the level of clean you need today. We tailor each visit to your surfaces, schedule, and preferences.
          </p>
        </div>
        <div className="service-grid">
          ${y.map(({title:e,icon:t,description:n})=>v`
            <${x} key=${e} icon=${t} title=${e} description=${n} />
          `)}
        </div>
        <div className="service-details">
          ${y.map(e=>v`
              <div key=${e.title} className="detail-row">
                <div>
                  <h3>${e.title}</h3>
                  <p className="muted">${e.description}</p>
                </div>
                <p>${e.details}</p>
              </div>
            `)}
        </div>
      </section>
    </div>
  `,g=c.bind(i.createElement),$={name:"",email:"",phone:"",address:"",service:"",date:"",time:"",notes:""},ae=()=>{const[e,t]=u($),[n,o]=u(!1),a=d=>{const{name:B,value:P}=d.target;t(A=>({...A,[B]:P}))};return g`
    <div className="page">
      <section className="section split">
        <div>
          <p className="eyebrow">Booking</p>
          <h2>Book a cleaning in minutes</h2>
          <p className="muted">
            Tell us about your space, schedule, and preferences. We will confirm your appointment and share a tailored plan.
          </p>
          <div className="cta-note">
            <strong>Need urgent service?</strong>
            <span>Call (647) 555-1188 and we will prioritize your slot.</span>
          </div>
        </div>
        <div className="form-card">
          <form className="form" onSubmit=${d=>{d.preventDefault(),console.log("Booking submitted:",e),o(!0),t($)}}>
            <div className="form-row">
              <label>
                Name
                <input name="name" type="text" required value=${e.name} onChange=${a} />
              </label>
              <label>
                Email
                <input name="email" type="email" required value=${e.email} onChange=${a} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone
                <input name="phone" type="tel" required value=${e.phone} onChange=${a} />
              </label>
              <label>
                Address
                <input name="address" type="text" required value=${e.address} onChange=${a} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Type of Cleaning
                <select name="service" required value=${e.service} onChange=${a}>
                  <option value="">Select a service</option>
                  <option>Home Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Airbnb Turnover</option>
                  <option>Carpet & Window</option>
                </select>
              </label>
              <label>
                Preferred Date
                <input name="date" type="date" required value=${e.date} onChange=${a} />
              </label>
              <label>
                Preferred Time
                <input name="time" type="time" required value=${e.time} onChange=${a} />
              </label>
            </div>
            <label>
              Additional Notes
              <textarea
                name="notes"
                rows="3"
                placeholder="Access details, parking notes, surfaces to prioritize..."
                value=${e.notes}
                onChange=${a}
              />
            </label>
            <button type="submit" className="btn btn-primary full">
              Submit Booking
            </button>
            ${n&&g`<div className="success">
              Thank you! We received your request and will confirm shortly.
            </div>`}
          </form>
        </div>
      </section>
    </div>
  `},N=c.bind(i.createElement),te=()=>{const[e,t]=u(""),[n,o]=u(!1);return N`
    <div className="page">
      <section className="section split">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>We are here to help</h2>
          <p className="muted">
            Reach out for quotes, scheduling, or special requests. We respond quickly during business hours.
          </p>
          <div className="contact-info">
            <span><${k} /> (647) 555-1188</span>
            <span><${C} /> hello@scarboroughcleanco.com</span>
            <span><${Q} /> Scarborough, ON</span>
          </div>
        </div>
        <div className="form-card">
          <form className="form" onSubmit=${s=>{s.preventDefault(),console.log("Contact message:",e),o(!0),t("")}}>
            <label>
              Name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea
                rows="4"
                value=${e}
                onChange=${s=>t(s.target.value)}
                placeholder="Tell us about your space or your question..."
                required
              />
            </label>
            <button type="submit" className="btn btn-primary full">
              Send Message
            </button>
            ${n&&N`<div className="success">Thanks! We will reply shortly.</div>`}
          </form>
        </div>
      </section>
    </div>
  `},m=c.bind(i.createElement),se={initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12}},ie=()=>{const{pathname:e}=b();return w(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),null},oe=()=>{const e=b();return m`
    <${i.Fragment}>
      <${ie} />
      <${K} />
      <main className="page-shell">
        <${R} mode="wait">
          <${l.div}
            key=${e.pathname}
            variants=${se}
            initial="initial"
            animate="animate"
            exit="exit"
            transition=${{duration:.3,ease:"easeInOut"}}
            className="page-wrapper"
          >
            <${D} location=${e}>
              <${p} path="/" element=${m`<${J} />`} />
              <${p} path="/about" element=${m`<${_} />`} />
              <${p} path="/services" element=${m`<${ee} />`} />
              <${p} path="/booking" element=${m`<${ae} />`} />
              <${p} path="/contact" element=${m`<${te} />`} />
            <//>
          <//>
        <//>
      </main>
      <${X} />
    <//>
  `},ne=document.getElementById("root"),re=O.createRoot(ne);re.render(i.createElement(i.StrictMode,null,i.createElement(L,null,i.createElement(oe))));
