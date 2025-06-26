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
