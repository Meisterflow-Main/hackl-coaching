import { useLocation, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Home, ShieldCheck, MapPin, BookOpen, Phone, ArrowRight, HelpCircle } from 'lucide-react';


export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });

    const linkGroups = [
        {
            title: "Dienstleistungen",
            icon: ShieldCheck,
            links: [
                { to: "/dienstleistungen", label: "Alle Dienstleistungen im Überblick" },
                { to: "/aengste", label: "Ängste & Phobien auflösen" },
                { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage" },
                { to: "/burnout", label: "Burnout & Belastungsdepression" },
                { to: "/beziehungskonflikte", label: "Beziehungskonflikte lösen" },
            ],
        },
        {
            title: "Regionen",
            icon: MapPin,
            links: [
                { to: "/regionen", label: "Psychologische Beratung in Ihrer Region" },
                { to: "/regionen/psychologische-beratung-thalwil", label: "Psychologische Beratung Thalwil" },
                { to: "/regionen/psychologische-beratung-zuerich", label: "Psychologische Beratung Zürich" },
                { to: "/regionen/psychologische-beratung-horgen", label: "Psychologische Beratung Horgen" },
            ],
        },
        {
            title: "Informationen & Kontakt",
            icon: BookOpen,
            links: [
                { to: "/blog", label: "Blog – Ratgeber & Artikel" },
                { to: "/faq", label: "Häufige Fragen (FAQ)" },
                { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
                { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
            ],
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-2xl w-full">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-slate-300">404</h1>
                        <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
                    </div>

                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-slate-800">
                            Seite nicht gefunden
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Die Seite <span className="font-medium text-slate-700">"{pageName}"</span> konnte leider nicht gefunden werden. Vielleicht hilft Ihnen eine der folgenden Seiten weiter.
                        </p>
                    </div>

                    {/* Admin Note */}
                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                </div>
                                <div className="text-left space-y-1">
                                    <p className="text-sm font-medium text-slate-700">Admin Note</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-6 flex flex-wrap justify-center gap-3">
                        <Link
                            to="/"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-lg hover:bg-accent hover:border-accent transition-colors"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Zur Startseite
                        </Link>
                        <Link
                            to="/kontakt"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Kontakt aufnehmen
                        </Link>
                    </div>
                </div>

                {/* Interne Verlinkung – Thematische Links */}
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    {linkGroups.map((group) => (
                        <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-5">
                            {group.icon && <group.icon className="h-5 w-5 text-primary mb-2" />}
                            <h3 className="font-semibold text-slate-800 text-sm mb-3">{group.title}</h3>
                            <ul className="space-y-1.5">
                                {group.links.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="group inline-flex items-start gap-1 text-xs text-slate-600 hover:text-primary transition-colors"
                                        >
                                            <ArrowRight className="h-3 w-3 mt-0.5 shrink-0 text-primary/50 group-hover:translate-x-0.5 transition-transform" />
                                            <span className="font-medium">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}