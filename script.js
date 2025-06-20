// Elementos do DOM
const jobForm = document.getElementById('jobForm');
const jobTableBody = document.querySelector('#jobTable tbody');
const exportBtn = document.getElementById('exportBtn');
const importFile = document.getElementById('importFile');

let novoLinkInput, salvarLinkBtn, cardsContainer;

// Dados das vagas
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
let savedLinks = JSON.parse(localStorage.getItem('savedLinks')) || [];

function saveLinksToStorage() {
  localStorage.setItem('savedLinks', JSON.stringify(savedLinks));
}

function renderSavedLinks(container) {
  if(!cardsContainer) return

  cardsContainer.innerHTML = ''; // Limpa o conteúdo atual 

  if (savedLinks.length === 0) {
    cardsContainer.innerHTML = '<p style="color: #aaa;">Nenhum link salvo.</p>';
    return;
  }

  savedLinks.forEach((link, index) => {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.innerHTML = `
      <a href="${link}" target="_blank">${link}</a>
      <button class="delete-btn" onclick="removeLink(${index})">🗑</button>
    `;
    cardsContainer.appendChild(card);
  });
}

window.removeLink = function(index){
  savedLinks.splice(index, 1);
  saveLinksToStorage();
  renderSavedLinks();
}

// Função para renderizar a tabela de vagas
function renderJobs() {
  // Limpa o conteúdo atual da tabela
  jobTableBody.innerHTML = '';

  // Adiciona cada vaga como uma nova linha na tabela
  jobs.forEach((job, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${job.jobTitle || 'N/A'}</td>
      <td>${job.company || 'N/A'}</td>
      <td><a href="${job.link}" target="_blank">${job.link || 'N/A'}</a></td>
      <td>${job.date || 'N/A'}</td>
      <td><button onclick="deleteJob(${index})">Remover</button></td>
    `;
    jobTableBody.appendChild(row);
  });
}

// Função para adicionar uma nova vaga
jobForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const jobTitle = document.getElementById('jobTitle').value.trim();
  const company = document.getElementById('company').value.trim();
  const link = document.getElementById('link').value.trim();
  const date = document.getElementById('date').value.trim();

  if (jobTitle && company && link && date) {
    const newJob = { jobTitle, company, link, date };
    jobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    renderJobs(); // Atualiza a tabela após adicionar
    jobForm.reset(); // Limpa o formulário
  } else {
    alert('Preencha todos os campos!');
  }
});

// Função para remover uma vaga
function deleteJob(index) {
  jobs.splice(index, 1); // Remove a vaga pelo índice
  localStorage.setItem('jobs', JSON.stringify(jobs)); // Atualiza o localStorage
  renderJobs(); // Atualiza a tabela após remover
}

// Função para exportar vagas para JSON
exportBtn.addEventListener('click', () => {
  const json = JSON.stringify(jobs, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'vagas.json';
  a.click();
  URL.revokeObjectURL(url);
});

// Função para importar vagas de um arquivo JSON
importFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedJobs = JSON.parse(event.target.result);
        if (Array.isArray(importedJobs)) {
          jobs = importedJobs; // Atualiza os dados com os importados
          localStorage.setItem('jobs', JSON.stringify(jobs)); // Salva no localStorage
          renderJobs(); // Atualiza a tabela após importar
        } else {
          alert('Arquivo inválido!');
        }
      } catch (error) {
        alert('Erro ao importar o arquivo!');
      }
    };
    reader.readAsText(file);
  }
});

// Renderizar vagas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  novoLinkInput = document.getElementById('novoLink');
  salvarLinkBtn = document.getElementById('salvarLinkBtn');
  cardsContainer = document.getElementById('cardsContainer');

  salvarLinkBtn.addEventListener('click', () => {
    const link = novoLinkInput.value.trim();
  
    if (link && /^https?:\/\//.test(link)) {
      savedLinks.push(link);
      saveLinksToStorage();
      renderSavedLinks(cardsContainer);
      novoLinkInput.value = '';
    } else {
      alert('Link inválido! Certifique-se de incluir "http://" ou "https://".');
    }
  });

  renderSavedLinks(cardsContainer);
  renderJobs(); // Garante que os dados sejam exibidos ao carregar a página
});