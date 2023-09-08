interface ErrorProps {
  error: string
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <div>There are some error {error}</div>
}

export default Error
