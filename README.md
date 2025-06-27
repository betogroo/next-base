## 🧼 Começando com um projeto Next.js do zero com TypeScript

### 1. Crie o projeto básico (sem exemplo):

```bash
npx create-next-app@latest my-app
```

> Substitua `my-app` pelo nome desejado do projeto.

---

### 2. Durante a criação, responda:

| Pergunta                          | Resposta recomendada |
| --------------------------------- | -------------------- |
| Would you like to use TypeScript? | **Yes** ✅           |
| Would you like to use ESLint?     | Yes                  |
| Would you like to use Tailwind?   | No                   |
| Would you like to use `src/`?     | Yes ✅               |
| Would you like to use App Router? | Yes ✅               |
| Customize import alias?           | No                   |

---

### 3. Rodar o projeto

```bash
cd my-app
npm run dev
```

---

### 4. Editar a página principal

Abra o arquivo:

```bash
src/app/page.tsx
```

E substitua o conteúdo por:

```tsx
export default function Home() {
  return <h1>Hello World!</h1>
}
```

---

Perfeito! Agora sim você criou um projeto **Next.js com TypeScript**, usando a **App Router**, que é a estrutura mais moderna do Next (desde a versão 13+). Vamos entender cada parte da estrutura que foi gerada automaticamente dentro da pasta `src/app/`.

---

## 🗂️ Estrutura explicada – `src/app/`

```bash
src/
 ┗ app/
   ┣ favicon.ico
   ┣ globals.css
   ┣ layout.tsx
   ┣ page.module.css
   ┗ page.tsx
```

---

### 1. `src/`

- A pasta `src/` organiza todos os arquivos de código do projeto.
- É opcional, mas altamente recomendada para manter o projeto mais limpo e organizado (como no Nuxt com `/pages`, `/components`, etc).

---

### 2. `app/` — ⚙️ **App Router**

- Essa pasta substitui a tradicional `pages/` do Next.js.
- Cada **subpasta ou arquivo** dentro de `app/` define uma rota automaticamente.

  - Ex: `app/page.tsx` → `/`
  - Ex: `app/about/page.tsx` → `/about`

#### Benefícios:

- Layouts persistentes (`layout.tsx`)
- Nested routes com layouts aninhados
- Melhor suporte a streaming, loading, error boundaries etc.

---

### 3. `page.tsx`

- Representa a **página principal** (`/`).
- Equivalente ao `index.vue` em Vue/Nuxt.
- Exemplo básico:

```tsx
export default function Home() {
  return <h1>Hello World</h1>
}
```

---

### 4. `layout.tsx`

- Este arquivo define o **layout persistente** usado por todas as páginas dentro do mesmo diretório.
- Pode conter header, footer, estilos globais, etc.
- Equivalente ao `<NuxtLayout>` ou `layouts/default.vue` do Nuxt.

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

> ✨ É obrigatório ter um `layout.tsx` no nível raiz da pasta `app/`.

---

### 5. `globals.css`

- Arquivo de CSS global.
- Importado no `layout.tsx`, é aplicado a todas as páginas.
- Pode incluir reset CSS, variáveis, fontes externas etc.

---

### 6. `page.module.css`

- CSS escopado localmente para a página `page.tsx`.
- Funciona como `<style scoped>` no Vue.
- Nome do arquivo segue o padrão `*.module.css` para ativar CSS Modules.

---

### 7. `favicon.ico`

- Ícone da aba do navegador.
- Carregado automaticamente.

---

## 🔁 Comparativo rápido com Nuxt

| Nuxt                  | Next.js App Router               |
| --------------------- | -------------------------------- |
| `pages/index.vue`     | `app/page.tsx`                   |
| `layouts/default.vue` | `app/layout.tsx`                 |
| `assets/css/main.css` | `app/globals.css`                |
| Roteamento automático | Roteamento automático via `app/` |
| `<NuxtPage />`        | `{children}`                     |

---

Perfeito! Vamos dar os **próximos passos com calma e na prática**. Vamos:

1. Criar uma nova página `/about`
2. Adicionar um layout com um cabeçalho fixo (navbar simples)
3. Adicionar navegação com `<Link>` entre as páginas

---

## ✅ 1. Criar a página `/about`

### ➕ Crie a pasta e o arquivo:

```bash
mkdir src/app/about
touch src/app/about/page.tsx
```

### 💡 Ou crie manualmente:

```
src/
┗ app/
  ┗ about/
    ┗ page.tsx
```

### ✍️ Conteúdo do `src/app/about/page.tsx`:

```tsx
export default function AboutPage() {
  return <h1>Sobre o projeto</h1>
}
```

Agora, ao acessar `http://localhost:3000/about`, a página funciona 🎉

---

## ✅ 2. Adicionar um layout com cabeçalho fixo

### 🛠 Edite o arquivo `src/app/layout.tsx`:

Atualize para incluir um layout com navegação:

```tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Meu App',
  description: 'Aprendendo Next.js com React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  )
}
```

> ✅ Isso cria um header fixo com links para navegar entre as páginas.

---

## ✅ 3. Verificar navegação com `<Link>`

- O componente `Link` é importado de `next/link`
- Ele funciona como `<NuxtLink>` no Nuxt
- Ele **não recarrega a página** (navegação SPA)

---

### 💡 Teste:

- Acesse `/`
- Clique em **About** → Vai para `/about`
- Clique em **Home** → Volta para `/`

---

# shadcn/ui

## 🚀 Instalação do Tailwind CSS v4 + CLI + PostCSS

1. **Instale Tailwind CSS v3 estável:**

```bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
```

2. **Gere os arquivos de config normalmente:**

```bash
npx tailwindcss init -p
```

3. **Mantenha o `postcss.config.js` assim:**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

4. **Mantenha o `tailwind.config.js` assim:**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. **Mantenha o `global.css` assim:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Mantenha o `app/src/page.tsx` assim:**

```tsx
export default function Home() {
  return <h1 className="text-5xl font-bold text-blue-500">Home</h1>
}
```

7. **Mantenha o `app/src/about/page.tsx` assim:**

```tsx
export default function About() {
  return <h1 className="text-5xl font-bold text-green-500">About</h1>
}
```

8. **Mantenha o `app/src/layout.tsx` assim:**

```tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Meu App',
  description: 'Aprendendo Next.js com React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="p-4 bg-blue-600 text-white">
          <nav className="flex  gap-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="flex items-center text-white p-4">{children}</main>
      </body>
    </html>
  )
}
```

9. ** Por fim reinicie o servidor:**

```bash
npm run dev
```

---

## ✅ Passo a passo atualizado para o novo `shadcn`

### 1. Rode o comando:

```bash
npx shadcn@latest init
```

### 2. Responda às perguntas:

| Pergunta                                 | Sugestão                             |
| ---------------------------------------- | ------------------------------------ |
| **Which style**                          | `Default` (ou `New York`, se quiser) |
| **Where is your global CSS file**        | `src/app/globals.css`                |
| **Where is your tailwind.config.js**     | `tailwind.config.js`                 |
| **Where should components be generated** | `components` (padrão)                |
| **Do you want to use TypeScript?**       | `Yes`                                |

---

### 3. Adicionar um componente (ex: botão)

```bash
npx shadcn@latest add button
```

---

### 4. Usar o botão no seu `page.tsx`

```tsx
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Shadcn funcionando! 🎉</h1>
      <Button variant="default">Clique aqui</Button>
      <Button variant="destructive">Deletar</Button>
    </section>
  )
}
```

---

### 5. Rodar o projeto

```bash
npm run dev
```

---

## ✅ Nav Bar

| Conceito Vue                   | Equivalente React (JSX)    | Explicação                                         |
| ------------------------------ | -------------------------- | -------------------------------------------------- |
| `v-for="item in items"`        | `{items.map(item => (…))}` | Usa `map()` no lugar do `v-for`                    |
| `:key="item.id"`               | `key={item.id}`            | Mesma função: identificar cada item de forma única |
| `:href="link"`                 | `href={link}`              | Atribuição dinâmica com `{}`                       |
| Qualquer JS dentro do template | Envolvido em `{…}`         | JSX exige `{}` para expressões JS/TS               |

> 🧠 JSX é como HTML com superpoderes — tudo que for variável ou código, precisa estar entre `{}`.

---

## 🧩 Dica extra: expressões complexas

Você pode usar **qualquer lógica JS dentro do `map`**, por exemplo:

```tsx
{
  pages.map((page, index) => (
    <Link
      key={page.href}
      href={page.href}
      className={`text-sm hover:text-blue-600 ${
        index === 0 ? 'text-green-600' : 'text-gray-700'
      }`}
    >
      {page.name}
    </Link>
  ))
}
```

Isso mostra que JSX aceita **condicionais**, **template strings**, e até **funções**.

---

## 🪄 Extra para ensinar:

Você pode também mostrar:

```tsx
{
  pages.length > 0 && (
    <p className="text-xs text-gray-400">
      Temos {pages.length} links na navegação.
    </p>
  )
}
```

Isso reforça que blocos condicionais com `&&` também são comuns no React (sem `v-if`).

---
