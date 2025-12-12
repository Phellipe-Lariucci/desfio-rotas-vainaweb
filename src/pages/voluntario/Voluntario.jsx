import s from "./voluntario.module.scss";

const Vonluntario = () => {
  return (
    <main>
      <section className={s.voluntario}>
        <h1>Seja Voluntário</h1>
        <h2>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </h2>
        <div className={s.cards}>
          <article>
            <h3>Impacto Direto</h3>
            <p>Impacto Direto</p>
          </article>
          <article>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>
          <article>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>
      <section className={s.dados}>
        <div className={s.formulario}>
          <h3>Inscrição para Voluntários</h3>
          <form method="post">
            <fieldset className={s.pessoais}>
              <legend>Dados Pessoais</legend>
              <div className={s.inputs}>
                <input
                  className={s.nome}
                  type="text"
                  placeholder="Digite seu nome"
                />
                <input
                  className={s.email}
                  type="email"
                  placeholder="Digite seu melhor E-mail"
                  pattern="^[^\s@]+@[^\s@]+\.com$"
                />
                <input
                  className={s.numero}
                  type="tel"
                  placeholder="Digite seu telefone com DDD"
                  pattern="^\(\d{2}\)\d{4}-\d{4}$"
                />
              </div>
            </fieldset>
          </form>
          <fieldset className={s.msg}>
            <legend>Mensagem Adicional</legend>
            <textarea
              className={s.textarea}
              placeholder="Conte-nos porque você quer ser voluntário..."
            ></textarea>
          </fieldset>
          <button className={s.botao}>Enviar Inscrição</button>
        </div>
      </section>
    </main>
  );
};

export default Vonluntario;
