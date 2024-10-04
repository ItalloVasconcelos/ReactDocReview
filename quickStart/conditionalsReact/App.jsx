// There is three ways to make conditions in React
// First one:
let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />
}
 // return (
 //     <div>
 //         {content}
 //     </div>
 // );

// Second way:
<div>
    {isLoggedIn ? (
        <AdminPanel /> ) : (
            <LoginForm />
    )}
</div>

// Third way (without else)
<div>
    {isLoggedIn && <AdminPanel />}
</div>
