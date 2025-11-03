export default function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-bold">Embinsys</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Innovation. Quality. Reliability. Partnering with clients to deliver
            end‑to‑end embedded engineering solutions.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Offices</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Troy, MI, USA</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>www.embinsys.com</li>
            <li>info@embinsys.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2024 Embinsys Proprietary. All rights reserved.
      </div>
    </footer>
  );
}
