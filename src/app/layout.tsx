//src/app/layout.tsx

import 'src/app/globals.css';
import ApolloWrapper from '@/components/ApolloWrapper';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'My App',
  description: 'Knowledge base app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers> {/* ✅ SessionProvider now wrapped here */}
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
