Aqui estão apenas os itens **absolutamente essenciais** – o núcleo mínimo que o app precisa ter no dia do lançamento:

---

## 1. Estrutura e Codebase

* **Modularização básica de componentes**

  * Componentes isolados para botões, inputs e cards; pastas por domínio (`components/pet`, `components/user`, `views`).
* **Store centralizada**

  * Pinia ou Vuex para gerenciar autenticação e lista de pets.
* **Camada de serviços/API**

  * Todos os requests HTTP via um arquivo `api.js` ou `services/api.js`, com interceptor para JWT.

---

## 2. Qualidade Mínima de Código

* **Lint + Prettier configurados**

  * Para bloquear erros de sintaxe e formatação antes do commit.
* **TypeScript (opcional, mas recomendado)**

  * Tipagem mínima em stores e payloads de API.

---

## 3. Funcionalidades Críticas

1. **Autenticação**

   * Login/Logout com JWT; proteção de rotas no router.
2. **Cadastro de pet desaparecido**

   * Formulário com upload de foto (S3/Cloudinary ou backend equivalente).
3. **Botão de pânico**

   * Trigger que envia notificação em massa (via backend); feedback visual (spinner + confirmação).
4. **Listagem e busca de pets**

   * Lista paginada ou infinite scroll; filtro por nome e localização.

---

## 4. Fluxo de UX Básico

* **Validação de formulários**

  * Required + formatos mínimos (ex.: email, data).
* **Feedback de carregamento e erro**

  * Spinner em botões de submit e mensagens claras de erro/sucesso.

---

Esses elementos formam o **núcleo mínimo** para que, no dia do lançamento, o app esteja funcional, seguro e ofereça a experiência básica de cadastro, busca e alerta de pets desaparecidos.
