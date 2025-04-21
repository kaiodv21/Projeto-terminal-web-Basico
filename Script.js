const output = document.getElementById('output');
const input = document.getElementById('commandInput');

const commands = {
  help: `Comandos disponíveis:
- about
- projects
- contact
- clear`,

  about: `Sou um desenvolvedor apaixonado por tecnologia, focado em Front-end e Back-end.
Gosto de criar experiências únicas e funcionais.`,

  projects: `Projetos:
1. Farmácia em SQL
2. Sistema de Estoque
3. Interface Terminal
4. Em breve: novos sistemas web.`,

  contact: `E-mail: voce@email.com
GitHub: github.com/seuusuario
LinkedIn: linkedin.com/in/seuusuario`,

  clear: ''
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    output.innerHTML += `> ${cmd}\n`;

    if (commands[cmd]) {
      if (cmd === 'clear') {
        output.innerHTML = '';
      } else {
        output.innerHTML += `${commands[cmd]}\n\n`;
      }
    } else {
      output.innerHTML += `Comando não reconhecido. Digite 'help' para ver os comandos.\n\n`;
    }

    window.scrollTo(0, document.body.scrollHeight);
  }
});