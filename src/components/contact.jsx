// import MUI icons
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// import components
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center w-full my-10">
      <h1 className="text-4xl">Get In Touch</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ut
        maxime corrupti <br /> dolores ex rerum iste ipsam soluta quis dolorum
        doloribus
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-3/4">
        <div className="flex flex-col justify-center items-center gap-2 bg-gray-200 p-5 rounded">
          <LocationPinIcon color="primary" />
          <h3>102 Street 2714 Donovan</h3>
          <p>Lorem ipsum dolar site amet discont</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-gray-200 p-5 rounded">
          <PhoneInTalkIcon color="primary" />
          <h3>+02 1234 567 88</h3>
          <p>Lorem ipsum dolar site amet discont</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-gray-200 p-5 rounded">
          <MailOutlineIcon color="primary" />
          <h3>info@example.com</h3>
          <p>Lorem ipsum dolar site amet discont</p>
        </div>
      </div>
      {/* add the contact form here */}
      <ContactForm />
    </main>
  );
}
