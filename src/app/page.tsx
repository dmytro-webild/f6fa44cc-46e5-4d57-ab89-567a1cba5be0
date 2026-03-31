"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeLargeTitles"
      background="noise"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About Us", id: "about" },
              { name: "Reviews", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Photos", id: "photos" }
            ]}
            brandName="Sullivan's Carpet & Furniture"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboard
            background={{ variant: "gradient-bars" }}
            title="Sullivan's Carpet & Furniture: Grand Rapids' Finest Selection"
            description="Offering quality carpets and furniture for homes and offices since we opened our doors. Visit us for unmatched service, professional installation, and prices you'll love."
            buttons={[
              { text: "Call Us", href: "tel:6162438066" },
              { text: "Get Directions", href: "https://maps.google.com" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/person-working-embroidery-workshop_23-2148970775.jpg?_wi=1"
            imageAlt="Sullivan's showroom display"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/close-up-beautiful-joyful-african-student-woman-with-dark-wavy-hair-green-cardigan-sitting-cafe-drinking-cup-coffee-smiling-camera-woman-waiting-her-boyfriend-after-university_176420-12329.jpg", alt: "Customer 1" },
              { src: "http://img.b2bpic.net/free-photo/african-student-passed-exams-having-fun-with-university-mates-international-office-workers-discussing-about-new-company-goals_197531-3749.jpg", alt: "Customer 2" },
              { src: "http://img.b2bpic.net/free-photo/portrait-happy-young-businessman-looking-camera_23-2147839978.jpg", alt: "Customer 3" },
              { src: "http://img.b2bpic.net/free-photo/cheerful-employees-talking-laughing-workplace_74855-4008.jpg", alt: "Customer 4" },
              { src: "http://img.b2bpic.net/free-photo/medium-shot-people-chatting-classroom_23-2150331690.jpg", alt: "Customer 5" }
            ]}
            avatarText="Trusted by 5,000+ local families"
            marqueeItems={[
              { type: "text", text: "Premium Carpeting" },
              { type: "text", text: "Modern Furniture" },
              { type: "text", text: "Expert Installation" },
              { type: "text", text: "Competitive Pricing" },
              { type: "text", text: "Family Owned Since 1985" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextSplitAbout
            useInvertedBackground={true}
            title="Family Owned & Trusted Local Experts"
            description={[
              "Serving the Grand Rapids community for years, Sullivan's Carpet and Furniture is your destination for high-quality carpeting and stylish, comfortable furniture.",              "We take pride in our huge selection and our commitment to seamless, professional installation. Whether you're upgrading your home office or refreshing your living room, Jeff and our team are here to guide you to the perfect design."
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "D Grimm", handle: "Local Guide", testimonial: "Their furniture is fantastic for the price. We bought 2 sectionals and both are high quality with no sign of wear after 4 years.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-joyful-african-student-woman-with-dark-wavy-hair-green-cardigan-sitting-cafe-drinking-cup-coffee-smiling-camera-woman-waiting-her-boyfriend-after-university_176420-12329.jpg" },
              { id: "2", name: "Kat Finch", handle: "Local Guide", testimonial: "Great selection and prices. William installed the carpet perfectly—flawless cuts between the bedroom, hallway, and stairs.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/african-student-passed-exams-having-fun-with-university-mates-international-office-workers-discussing-about-new-company-goals_197531-3749.jpg?_wi=1" },
              { id: "3", name: "Robert Brouwer", handle: "Local Guide", testimonial: "Jeff is awesome, and they have a lot to choose from. He quoted us efficiently and the measurements were spot on.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-businessman-looking-camera_23-2147839978.jpg" },
              { id: "4", name: "Mary Frei", handle: "Local Guide", testimonial: "Jeff was very helpful finding the right carpet for our new home. They probably have the most choices in the world!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-employees-talking-laughing-workplace_74855-4008.jpg" },
              { id: "5", name: "Sarah Jenkins", handle: "Homeowner", testimonial: "The installation team was incredibly respectful and efficient. Highly recommend!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/african-student-passed-exams-having-fun-with-university-mates-international-office-workers-discussing-about-new-company-goals_197531-3749.jpg?_wi=2" }
            ]}
            showRating={true}
            title="What Our Community Says"
            description="Join thousands of satisfied customers who have trusted Sullivan's for their home transformations."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "Do you provide installation services?", content: "Yes! We provide professional carpet installation services for both homes and offices to ensure your flooring looks perfect." },
              { id: "f2", title: "Where is your store located?", content: "We are located at 1860 28th St SE, Grand Rapids, MI 49508." },
              { id: "f3", title: "What are your business hours?", content: "We are open daily. Our store closes at 6:00 PM." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/close-up-wool-texture-design_23-2149503227.jpg?_wi=1"
            imageAlt="Our carpet installation work"
            mediaAnimation="slide-up"
            faqsAnimation="slide-up"
            title="Common Questions"
            description="Have questions about our installation process or store hours? We're here to help. Our showroom is open daily from 9 AM to 6 PM."
          />
        </div>

        <div id="photos" data-section="photos" style={{ display: 'none' }}>
            <a href="https://www.facebook.com/Sullivanscarpet/photos">Photos</a>
        </div>

        <div id="product" data-section="product">
          <ProductCardThree
            animationType="slide-up"
            textboxLayout="split-description"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            title="Featured Collections"
            description="Explore our curated selection of high-quality flooring and living room essentials. Visit our showroom daily from 9 AM to 6 PM to see our full catalog."
            buttons={[
              { text: "View Full Catalog", href: "/catalog" },
              { text: "Visit Store", href: "https://maps.google.com" }
            ]}
            products={[
              { id: "p1", name: "Plush Wool Carpet", price: "$4.99/sq ft", imageSrc: "http://img.b2bpic.net/free-photo/close-up-wool-texture-design_23-2149503227.jpg?_wi=2" },
              { id: "p2", name: "Classic Leather Sofa", price: "$1,299.00", imageSrc: "http://img.b2bpic.net/free-photo/person-working-embroidery-workshop_23-2148970775.jpg?_wi=2" },
              { id: "p3", name: "Modern Area Rug", price: "$299.00", imageSrc: "http://img.b2bpic.net/free-photo/close-up-wool-texture-design_23-2149503227.jpg?_wi=3" },
              { id: "p4", name: "Modular Sectional", price: "$1,850.00", imageSrc: "http://img.b2bpic.net/free-photo/person-working-embroidery-workshop_23-2148970775.jpg?_wi=3" },
              { id: "p5", name: "Durable Nylon Flooring", price: "$3.50/sq ft", imageSrc: "http://img.b2bpic.net/free-photo/close-up-wool-texture-design_23-2149503227.jpg?_wi=4" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="Sullivan's Carpet & Furniture"
            leftLink={{
              text: "1860 28th St SE, Grand Rapids, MI 49508",              href: "https://maps.google.com"
            }}
            rightLink={{
              text: "Call us at (616) 243-8066",              href: "tel:6162438066"
            }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
