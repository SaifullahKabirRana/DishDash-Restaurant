

const App = () => {
    return (
        <div className="flex gap-8 justify-center py-56">
            <button className="btn border-none rounded-md shadow-md">Default</button>
            <button className="btn btn-outline btn-primary">Primary</button>
            <button className="btn btn-outline btn-secondary">Secondary</button>
            <button className="btn btn-outline btn-accent">Accent</button>
            <h2 className="btn">Login</h2>
        </div>
    );
};

export default App;