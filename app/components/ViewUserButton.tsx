"use client"

interface ViewUserButtonProps {
    userId: number,
}

const ViewUserButton : React.FC<ViewUserButtonProps> = (userId) => {
    const handleClick = () => {
        alert(`User id: ${userId}`)
    }

 return (
    <>
        <button onClick={handleClick}>Klik Aku</button>
    </>
 )
}

export default ViewUserButton