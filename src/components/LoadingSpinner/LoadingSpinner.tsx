import './LoadingSpinner.scss'

interface LoadingSpinnerProps {
  message?: string
}

const LoadingSpinner = ({ message = '加载中...' }: LoadingSpinnerProps) => {
  return (
    <div className="loading-spinner">
      <div className="spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  )
}

export default LoadingSpinner 