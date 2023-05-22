import './Title.css';
function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="title">{children}</h2>;
}

export default Title;
