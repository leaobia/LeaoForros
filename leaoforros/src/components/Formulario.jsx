import React, { useState } from "react";
import axios from "axios";

function Formulario() {
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const handleCepChange = async (e) => {
    const novoCep = e.target.value;
    setCep(novoCep);

    if (novoCep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${novoCep}/json/`);
        const data = response.data;

        if (data.erro) {
          alert("CEP inválido. Tente novamente!");
          return;
        }

        setEndereco({
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
        });
      } catch (error) {
        alert("Erro ao buscar o endereço. Tente novamente!");
      }
    }
  };

  const handleEnviarZap = () => {
    const mensagem = `Olá, me chamo ${nome} , gostaria de realizar um orçamento e aqui estão meus dados:
- Endereço: ${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}.
- CEP: ${cep}`;

    const numeroWhatsapp = "5511961482191"; 
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}  id="orcamento">
      <h2>Solicitar Orçamento</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>CEP:</label>
        <input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="Digite seu CEP"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          maxLength={8}
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          value={endereco.logradouro}
          readOnly
          placeholder="Rua/Av."
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          value={endereco.bairro}
          readOnly
          placeholder="Bairro"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          value={`${endereco.localidade} - ${endereco.uf}`}
          readOnly
          placeholder="Cidade - UF"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <button
        onClick={handleEnviarZap}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Enviar pelo WhatsApp
      </button>
    </div>
  );
}

export default Formulario;