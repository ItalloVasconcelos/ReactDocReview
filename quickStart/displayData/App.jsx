const user = {
    name: 'Itallo Savio',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSizes: 90,
};

export default function Profile() {
    return (
        <>
        <h1>Username: {user.name}</h1>
            <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            style={{
                width:user.imageSizes,
                height:user.imageSizes,
            }}
            />
        </>
    );
}