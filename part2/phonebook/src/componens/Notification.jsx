const Notification = ({ message }) => {
    let className = ''
    if (message === '') {
      return null
    } else { 
        className = message.includes('Added')
        ? 'Added'
        : 'error'

        return (
        <div className={className}>
          {message}
        </div>
      )}
  
    
  }

  export default Notification