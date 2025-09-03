module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// --- NOVA FUNÇÃO AUXILIAR ---
// Recebe uma string de HTML e extrai a URL da imagem de dentro dela.
function extrairUrlDaImagem(htmlString) {
    // Isso é uma Expressão Regular (Regex) que busca pelo padrão src="..."
    const regex = /src="([^"]+)"/;
    const match = htmlString.match(regex);
    // Se encontrar o padrão, retorna a URL capturada. Senão, retorna null.
    // A URL que queremos está na posição 1 do array 'match'.
    return match ? match[1] : null;
}
function Home() {
    const [obras, setObras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [carregando, setCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function getObrasDoTainacan() {
            const TAINACAN_API_URL = 'https://tainacan.ufsm.br/acervo-artistico/wp-json/tainacan/v2/collection/2174/items?perpage=15';
            try {
                const resposta = await fetch(TAINACAN_API_URL);
                if (!resposta.ok) throw new Error('Erro na rede');
                const dados = await resposta.json();
                // --- MODIFICAÇÃO IMPORTANTE AQUI ---
                // Agora, para cada obra, extraímos a URL da imagem antes de guardar no estado.
                const obrasComImagem = dados.items.map((obra)=>({
                        ...obra,
                        imagemUrl: extrairUrlDaImagem(obra.document_as_html) // E adiciona a URL da imagem extraída
                    }));
                setObras(obrasComImagem);
            } catch (erro) {
                console.error("Falha ao buscar obras do Tainacan:", erro);
            } finally{
                setCarregando(false);
            }
        }
        getObrasDoTainacan();
    }, []);
    if (carregando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '2rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Acervo Artístico UFSM"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Carregando obras..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Acervo Artístico UFSM"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Agora com imagens!"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                },
                children: obras.map((obra)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            border: '1px solid #ccc',
                            padding: '0.5rem'
                        },
                        children: [
                            obra.imagemUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: obra.imagemUrl,
                                alt: obra.title,
                                style: {
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: obra.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, obra.id, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 61,
        columnNumber: 5
    }, this);
} /*
//import styles from "/src/app/page.module.css";

// --- COMPONENTE PRINCIPAL ---
export default function Home() {
  // --- TAREFA 2: GERENCIAMENTO DE ESTADO ---
  // 'obras' vai guardar a lista de obras que vem da API. Começa como um array vazio.
  const [obras, setObras] = useState([]);
  // 'carregando' controla a mensagem de "carregando...". Começa como 'true'.
  const [carregando, setCarregando] = useState(true);

  // --- TAREFA 3: BUSCA DE DADOS ---
  // 'useEffect' executa o código aqui dentro uma única vez quando o componente é montado.
  useEffect(() => {
    // Esta é a nossa função que busca os dados, agora dentro do useEffect.
    async function getObrasAcervo() {
      const apiUrl = "https://tainacan.ufsm.br/acervo-artistico/wp-json/tainacan/v2/collection/2174/items?perpage=15";
      
      try {
        const resposta = await fetch(apiUrl);
        if (!resposta.ok) {
          throw new Error('Erro na rede');
        }
        const dados = await resposta.json();


        console.log(dados.items);
        // 4. Atualiza o estado com as obras recebidas
        setObras(dados.items);
      } catch (erro) {
        console.error("Falha ao buscar obras do Tainacan:", erro);
        // Em caso de erro, poderíamos definir um estado de erro aqui.
      } finally {
        // 5. Independentemente do resultado, para de carregar.
        setCarregando(false);
      }
    }

    getObrasAcervo(); // Chama a função.
  }, []); // O array vazio [] garante que isso só rode uma vez.

  // --- TAREFA 4: RENDERIZAÇÃO ---
  // O componente decide o que mostrar com base no estado 'carregando'.
  if (carregando) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Acervo Artístico UFSM</h1>
        <p>Carregando obras...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Acervo Artístico UFSM</h1>
      <p>A conexão com o Tainacan funcionou! Aqui estão os títulos:</p>
      <ul>
        {obras.map(obra => (
          <li key={obra.id}>
            {obra.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

//export default App;




import styles from "./page.module.css";
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
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bae8bca9._.js.map