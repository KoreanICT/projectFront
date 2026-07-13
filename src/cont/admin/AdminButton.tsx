import React from 'react'
import { Link } from 'react-router-dom'

const AdminButton: React.FC = () => {
    return (
        <div>
            <Link to="/admin">
                관리자 전환
            </Link>
        </div>
    )
}

export default AdminButton