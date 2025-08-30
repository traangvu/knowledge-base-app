import prisma from "./prisma";

export async function getGraphData() {
    const nodes = await prisma.node.findMany();
    const linksRaw = await prisma.link.findMany();

    const links = linksRaw.map(link => ({
        source: link.sourceId.toString(),
        target: link.targetId.toString(),
        type: link.type
    }));

    const graphData = {
        nodes: nodes.map(node => ({ id: node.id.toString(), title: node.title, type: node.type })),
        links
    };

    return graphData;
}
