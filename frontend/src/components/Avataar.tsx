
interface AvataarTypes{    
    renderSize: 'small' | 'large' | 'medium',
    authorName?: string | null, 
   
}

export const Avataar =({authorName, renderSize, setVar}:AvataarTypes)=>{

    let size: string;
    let textSize: string;

    switch (renderSize) {
        case 'small':
            size = '1.5rem';
            textSize = '12px'
            break;
        case 'medium':
            size = '2rem';
            textSize = '16px'
            break;
        case 'large':
            size = '3rem';
            textSize = '20px'
            break;
    }

    return<>
        <div style={{ width: `${size}`, height: `${size}` }}  className="bg-slate-200 rounded-full flex justify-center items-center">
            <div style={{fontSize: `${textSize}` }}>
                {authorName? ((authorName.split(' ')[0][0]) + (authorName.split(' ')[1] ? authorName.split(' ')[1][0] : '')).toUpperCase(): " "}
            </div>           
        </div>

    </>
}

