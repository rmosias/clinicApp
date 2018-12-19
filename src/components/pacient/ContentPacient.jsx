import React from 'react'

const ContentPacient = () => {
  return (
    <tr>
        <th scope="row">1</th>
        <td>Rafael Mosias</td>
        <td>17/12/2018</td>
        <span className="status text-success">•</span>
        <td>
            <a href="#" className="settings" title="" data-toggle="tooltip" data-original-title="Settings"><i className="material-icons"></i></a>
            <a href="#" className="delete" title="" data-toggle="tooltip" data-original-title="Delete"><i className="material-icons"></i></a>
        </td>
    </tr>
  )
}

export default ContentPacient
