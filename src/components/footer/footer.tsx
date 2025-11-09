import { FaYoutube, FaInstagram, FaThreads } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-6 flex justify-center">
      <div className="text-center space-y-2">
        {/* Ícones de redes sociais */}
        <div className="flex justify-center gap-5 text-xl">
          <a
            href="https://www.threads.com/@PANCSMARILIA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#b6ca59] transition-colors duration-300"
          >
            <FaThreads />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-[#b6ca59] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaYoutube/>
          </a>
          <a
            href="https://instagram.com"
            target="https://www.instagram.com/PANCSMARILIA"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#b6ca59] focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Links e direitos */}
        <div className="text-l space-y-1">
          <p>
            <a
              href="/fale-conosco"
              className=" hover:text-[#b6ca59] focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Fale Conosco
            </a>
          </p>
          <p>
            <a
              href="/politica-de-privacidade"
              className=" hover:text-[#b6ca59] focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Política de Privacidade
            </a>
          </p>
          <p>&copy; {currentYear} Fatec Marília. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;