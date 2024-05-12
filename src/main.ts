import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  <script>
  $(document).ready(function() {
    $('#cpf').mask('999.999.999-99');
 
    $('#telefone').mask('(99)99999-9999');
  });
</script>
<script>
  function buscaEndereco() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado!');
          return;
        }

        document.getElementById('logradouro').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('localidade').textContent = data.localidade;
        document.getElementById('uf').textContent = data.uf;
      });
  }
</script>
