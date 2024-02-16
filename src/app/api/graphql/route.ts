import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "@/app/graphqlFiles/resolvers";
import { typeDefs } from "@/app/graphqlFiles/typeDef";



//create the graphQl Appolo server

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

// export { handler as GET, handler as POST };
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req: NextRequest, res: any) => ({
        req,
        res,
    }),
});
export async function GET(request: NextRequest) {
    return handler(request);
}
export async function POST(request: NextRequest) {
    return handler(request);
}

