import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function MyForm() {
  return (
    <div className="container mt-3">
      <h3>Formulario de preregistro</h3>
      <p>Información de contacto</p>

      <form
        action="http://localhost/action_guardar_datos.php"
        method="POST"
        className="was-validated"
      >
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Captura tu nombre completo"
            name="name"
            minLength="5"
            maxLength="60"
            pattern="[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+"
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">
            Por favor captura este campo.
          </div>
        </div>
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="correo"
            placeholder="Captura tu correo electrónico"
            name="correo"
            minLength="12"
            maxLength="60"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}"
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">
            Por favor captura este campo.
          </div>
        </div>
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="movil"
            placeholder="Captura tu móvil"
            name="movil"
            minLength="10"
            maxLength="10"
            pattern="[0-9]+"
            required
          />
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">
            Por favor captura este campo.
          </div>
        </div>

      <div className="mb-3 mt-3">
            <select className="form-select" name="escuela_procedencia" >
              <option value="">Selecciona tu escuela de procedencia:</option>
              <option value="CETIs">CETIs</option>
              <option value="CONALEP">CONALEP</option>
              <option value="CBTAs">CBTAs</option>
              <option value="COBAEZ">COBAEZ</option>
              <option value="CECYTEZ">CECYTEZ</option>
            </select>
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">
            Por favor captura este campo.
          </div>
        </div>

      <div className="mb-3 mt-3">
            <select className="form-select" name="carrera" >
              <option value="">Selecciona la carrera que te interesa:</option>
              <option value="Tecnológias de la Información">Tecnológias de la Información</option>
              <option value="Mecatrónica">Mecatrónica</option>
              <option value="Energías renovables">Energías renovables</option>
              <option value="Terapia Físcia">Terapia Físcia</option>
              <option value="Procesos Industriales">Procesos Industriales</option>
              <option value="Minas">Minas</option>
              <option value="Mantenimiento Industrial">Mantenimiento Industrial</option>
              <option value="Negocios">Negocios</option>
              <option value="Recrusos Humanos">Recrusos Humanos</option>
            </select>
          <div className="valid-feedback">Valido</div>
          <div className="invalid-feedback">
            Por favor captura este campo.
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="myCheck"
            name="remember"
            required
          />
          <label className="form-check-label" htmlFor="myCheck">
            I agree on blabla.
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);