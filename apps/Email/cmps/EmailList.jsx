import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails, onRemove, onToggleIsRead, onFilterUnread }) {
    if (!emails || emails.length === 0) return <div>No emails to show...</div>;

    return (
        <section className="email-list shadow fit-content">
            <div className="emails-list-top">
                Inbox
                <button>Unread</button>
            </div>
            <div className="emails-list-row">
                {emails.map(email => {
                    return <EmailPreview key={email.id} email={email}
                        onRemove={onRemove} onToggleIsRead={onToggleIsRead} />
                })}
            </div>

        </section>
    )
}