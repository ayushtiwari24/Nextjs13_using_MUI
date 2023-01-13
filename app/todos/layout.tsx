import TodosList from "./TodosList";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div>
                {/* @ts-ignore */}
                <TodosList />
            </div>

            <div>{children}</div>
        </main>
    );
  }