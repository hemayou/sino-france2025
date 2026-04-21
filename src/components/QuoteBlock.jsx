import FadeInSection from './FadeInSection'

export default function QuoteBlock({ text, author, className = '' }) {
  return (
    <FadeInSection className={className}>
      <blockquote className="quote-block">
        <p>{text}</p>
        {author && (
          <footer className="mt-3 text-sm text-text-light not-italic">
            —— {author}
          </footer>
        )}
      </blockquote>
    </FadeInSection>
  )
}
