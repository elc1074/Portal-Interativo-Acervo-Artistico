module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//"use client"
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
function Home() {
    // --- TAREFA 2: GERENCIAMENTO DE ESTADO ---
    // 'obras' vai guardar a lista de obras que vem da API. Começa como um array vazio.
    const [obras, setObras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    // 'carregando' controla a mensagem de "carregando...". Começa como 'true'.
    const [carregando, setCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(true);
    // --- TAREFA 3: BUSCA DE DADOS ---
    // 'useEffect' executa o código aqui dentro uma única vez quando o componente é montado.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Esta é a nossa função que busca os dados, agora dentro do useEffect.
        async function getObrasAcervo() {
            const apiUrl = "https://tainacan.ufsm.br/acervo-artistico/wp-json/tainacan/v2/collection/2174/items?perpage=15";
            try {
                const resposta = await fetch(apiUrl);
                if (!resposta.ok) {
                    throw new Error('Erro na rede');
                }
                const dados = await resposta.json();
                // 4. Atualiza o estado com as obras recebidas
                setObras(dados.items);
            } catch (erro) {
                console.error("Falha ao buscar obras do Tainacan:", erro);
            // Em caso de erro, poderíamos definir um estado de erro aqui.
            } finally{
                // 5. Independentemente do resultado, para de carregar.
                setCarregando(false);
            }
        }
        getObrasAcervo(); // Chama a função.
    }, []); // O array vazio [] garante que isso só rode uma vez.
    // --- TAREFA 4: RENDERIZAÇÃO ---
    // O componente decide o que mostrar com base no estado 'carregando'.
    if (carregando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '2rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Acervo Artístico UFSM"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Carregando obras..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Acervo Artístico UFSM"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "A conexão com o Tainacan funcionou! Aqui estão os títulos:"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: obras.map((obra)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: obra.title
                    }, obra.id, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
} //export default App;
 /*import styles from "./page.module.css";
import React, {useEffect, useState } from "react";


export default function Home(){
  const [obras, setObras]=useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    async function fetchObras(){
      try{
        const response=await fetch("https://tainacan.ufsm.br/acervo-artistico/wp-json/tainacan/v2/collection/2174/items");
        const data=await response.json();
        setObras(data.items);
      } catch(erro){
        console.error("erro ao buscar obras: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchObras();
  }, []);

  if(loading) return <p>carregando obras...</p>;

  return (
    <div style={{ padding: "16px" }}>
      <h1>🎨 ArteON</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {obras.map((obra) => (
          <li
            key={obra.id}
            style={{
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "8px"
            }}
          >
            <img
              src={obra.thumbnail}
              alt={obra.title.rendered}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h2>{obra.title.rendered}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}



async function getAcervObras(){
  const apiUrl = 'https://tainacan.ufsm.br/acervo-artistico/wp-json/tainacan/v2/collection/2174/items?perpage=15';


  try {
    // 'fetch' eh o comando do js p/ fazer uma requisicao na internet
    const response=await fetch(apiUrl);
    // se a resposta nao for bem-sucedida (ex. server fora do ar), um erro eh lancado
    if(!response.ok){
      throw new Error(`Erro na rede: ${response.status}`);
    }
    // convertemos a resposta, que vem em formato JSON, p/ um objeto q/ o JS entende.
    const data=await response.json();
    // a API retorna um objeto grande, mas a lista de obras esta dentro da chave "items"
    return data.items;
  } catch(erro){
    console.error("falha ao buscar obras", erro);
    return [];
  }



}




//import Image from "next/image";
//import styles from "./page.module.css";
import React from "react";

// func p/ buscar os dados reais da API do Tainacan

async function getAcervObras(){
  const apiUrl="https://tainacan.ufsm.br/acervo-artistico/wp-json/tainacan/v2/collection/2174/items?perpage=20";

  try{
    const response=await fetch(apiUrl, {
      // usamos o 'no-store p/ garantir q os dados sejam sempre os mais recentes durante o desenvolvimento
      cache: "no-store"
    });
    if (!response.ok){
      throw new Error("falha ao buscar dados da Tainacan API");
    }

    const data=await response.json();

    const obrasFormatadas=data.items.map(item=> {
      const autorInfo=item.metadata['5'];
      const autor=autorInfo ? autorInfo.value : "Autor desconhecido";

      return {
        id: item.id,
        titulo: item.title,
        autor: autor,
        imgUrl: item.document,
        descricao: item.description || "No desc"
      };
    });
    return obrasFormatadas;
  } catch(error){
    console.error("Erro ao conectar", error);
    return[];
  }
}

export default async function Home() {
  const obras=await getAcervObras();

  return (
    <main>
      <h1>Acervo Artistico UFSM</h1>
      <div className="artwork-grid">
        {obras.map(obra => (
          <div key={obra.id} className="artwork-item">
            <img src={obra.imgUrl} alt={obra.titulo} />
            <h4>{obra.titulo}</h4>
            <p>{obra.autor}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
*/ 
}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__604d5496._.js.map