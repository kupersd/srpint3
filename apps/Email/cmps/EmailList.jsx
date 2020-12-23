import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails, onRemove }) {
    if (!emails || emails.length === 0) return <div>Loading emails...</div>;

    return (
        <section className="emails-list">
            {emails.map(email => {
                return <EmailPreview key={email.id} email={email}
                onRemove={onRemove}/>
            })}
        </section>
    )
}