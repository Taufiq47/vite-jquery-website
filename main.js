import $ from "jquery";
import './style.css'
import { nilaiTeknik } from './helloMsg.js'

$('#app').html( `
  <div>
    <div class="container">
      <div id="nilai">
        <p class="nilai">Halo</p>
      </div>
      <button id="teknik">KLIK</button>
    </div>
  </div>
`)

nilaiTeknik($('#teknik'))
