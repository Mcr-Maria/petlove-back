import { prisma } from "../services/index.js"

async function buscar() {
    try {
        return await prisma.concorrentes.findMany()
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarPorId(id) {
    try {
        const request = await prisma.concorrentes.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (request) {
            return request;
        }
        return {
            type: "error",
            description: "Concorrente não encontrado"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function criar(dados) {

    try {
        const request = await prisma.concorrentes.create({
            data: dados
        });
        if (request) {
            return {
                type: "success",
                description: "Concorrente criado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível criar o concorrente"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function editar(dados) {

    try {
        const request = await prisma.concorrentes.update({
            data: dados,
            where: { id: Number(dados.id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Concorrente atualizado com sucesso",
            };
        }
        return {
            type: "error",
            description: "não foi possível atualizar o concorrente"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function deletar(id) {

    try {
        const request = await prisma.concorrentes.delete({
            where: { id: Number(id) }
        });
        if (request) {
            return {
                type: "success",
                description: "Concorrente deletado com sucesso",
            };
        }
        return {
            type: "error",
            description: "Não foi possível deletar o concorrente"
        }
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

export {
    buscar,
    buscarPorId,
    criar,
    editar,
    deletar
    
}