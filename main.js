import $ from "jquery";
import './style.css'
import { nilaiTeknik } from './helloMsg.js'

$('#app').html( `
  <div>
    <div class="container">
      <div id="nilai">
        <p class="nilai">NILAI</p>
      </div>
      <button id="teknik">TEKNIK</button>
    </div>
  </div>
`)

nilaiTeknik($('#teknik'))
