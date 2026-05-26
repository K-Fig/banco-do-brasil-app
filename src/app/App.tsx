import React from "react";
import { Button, Card, Input, Alert, Navbar, Footer, LogoMark, theme } from "@figmaposaurus/banco-do-brasil-ds";
import "@figmaposaurus/banco-do-brasil-ds/dist/style.css";
import { CreditCard, PiggyBank, Building, Shield, Smartphone, TrendingUp, ArrowRight } from "lucide-react";

export default function App() {
  const [accountNumber, setAccountNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div style={{ backgroundColor: theme.colors.background, minHeight: "100vh" }}>
      <Navbar />

      <Alert>
        Confira as novidades do BB: abertura de conta 100% digital com benefícios exclusivos!
      </Alert>

      {/* Hero Section */}
      <section style={{
        backgroundColor: theme.colors.surface,
        padding: "80px 24px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <LogoMark />
            <h1 style={{
              fontSize: theme.typography.h1.fontSize,
              fontWeight: theme.typography.h1.fontWeight,
              lineHeight: theme.typography.h1.lineHeight,
              color: theme.typography.h1.color,
              margin: 0
            }}>
              Banco do Brasil
            </h1>
          </div>
          <h2 style={{
            fontSize: theme.typography.h2.fontSize,
            fontWeight: theme.typography.h2.fontWeight,
            lineHeight: theme.typography.h2.lineHeight,
            color: theme.colors.textSecondary,
            marginBottom: "40px"
          }}>
            O banco que está com você em todos os momentos
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg">Abra sua conta</Button>
            <Button variant="secondary" size="lg">Acessar Internet Banking</Button>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{
            fontSize: theme.typography.h3.fontSize,
            fontWeight: theme.typography.h3.fontWeight,
            textAlign: "center",
            marginBottom: "40px"
          }}>
            Acesso Rápido
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "40px"
          }}>
            <Card variant="bordered">
              <div style={{ padding: "8px" }}>
                <h4 style={{
                  fontSize: theme.typography.h4.fontSize,
                  fontWeight: theme.typography.h4.fontWeight,
                  marginBottom: "16px"
                }}>
                  Acesse sua conta
                </h4>
                <Input
                  type="text"
                  placeholder="Número da conta"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  style={{ marginBottom: "12px" }}
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ marginBottom: "16px" }}
                />
                <Button variant="secondary" style={{ width: "100%" }}>
                  Entrar
                </Button>
              </div>
            </Card>

            <Card variant="bordered">
              <div style={{ padding: "8px" }}>
                <Smartphone size={48} color={theme.colors.primary} style={{ marginBottom: "16px" }} />
                <h4 style={{
                  fontSize: theme.typography.h4.fontSize,
                  fontWeight: theme.typography.h4.fontWeight,
                  marginBottom: "12px"
                }}>
                  App Banco do Brasil
                </h4>
                <p style={{
                  fontSize: theme.typography.p.fontSize,
                  color: theme.colors.textSecondary,
                  marginBottom: "16px"
                }}>
                  Baixe o app e tenha o banco na palma da sua mão
                </p>
                <Button variant="ghost">
                  Baixar agora <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </Button>
              </div>
            </Card>

            <Card variant="bordered">
              <div style={{ padding: "8px" }}>
                <Shield size={48} color={theme.colors.primary} style={{ marginBottom: "16px" }} />
                <h4 style={{
                  fontSize: theme.typography.h4.fontSize,
                  fontWeight: theme.typography.h4.fontWeight,
                  marginBottom: "12px"
                }}>
                  Segurança
                </h4>
                <p style={{
                  fontSize: theme.typography.p.fontSize,
                  color: theme.colors.textSecondary,
                  marginBottom: "16px"
                }}>
                  Suas informações protegidas com tecnologia de ponta
                </p>
                <Button variant="ghost">
                  Saiba mais <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ backgroundColor: theme.colors.surface, padding: "60px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{
            fontSize: theme.typography.h3.fontSize,
            fontWeight: theme.typography.h3.fontWeight,
            textAlign: "center",
            marginBottom: "40px"
          }}>
            Produtos e Serviços
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            <Card variant="elevated">
              <div style={{ padding: "8px", textAlign: "center" }}>
                <CreditCard size={56} color={theme.colors.primary} style={{ margin: "0 auto 16px" }} />
                <h5 style={{
                  fontSize: theme.typography.h5.fontSize,
                  fontWeight: theme.typography.h5.fontWeight,
                  marginBottom: "12px"
                }}>
                  Cartões de Crédito
                </h5>
                <p style={{
                  fontSize: theme.typography.p.fontSize,
                  color: theme.colors.textSecondary,
                  marginBottom: "16px"
                }}>
                  Encontre o cartão ideal para você com benefícios exclusivos
                </p>
                <Button variant="primary" size="sm">
                  Solicitar cartão
                </Button>
              </div>
            </Card>

            <Card variant="elevated">
              <div style={{ padding: "8px", textAlign: "center" }}>
                <PiggyBank size={56} color={theme.colors.primary} style={{ margin: "0 auto 16px" }} />
                <h5 style={{
                  fontSize: theme.typography.h5.fontSize,
                  fontWeight: theme.typography.h5.fontWeight,
                  marginBottom: "12px"
                }}>
                  Poupança e Investimentos
                </h5>
                <p style={{
                  fontSize: theme.typography.p.fontSize,
                  color: theme.colors.textSecondary,
                  marginBottom: "16px"
                }}>
                  Faça seu dinheiro render com nossas opções de investimento
                </p>
                <Button variant="primary" size="sm">
                  Investir agora
                </Button>
              </div>
            </Card>

            <Card variant="elevated">
              <div style={{ padding: "8px", textAlign: "center" }}>
                <Building size={56} color={theme.colors.primary} style={{ margin: "0 auto 16px" }} />
                <h5 style={{
                  fontSize: theme.typography.h5.fontSize,
                  fontWeight: theme.typography.h5.fontWeight,
                  marginBottom: "12px"
                }}>
                  Empréstimos
                </h5>
                <p style={{
                  fontSize: theme.typography.p.fontSize,
                  color: theme.colors.textSecondary,
                  marginBottom: "16px"
                }}>
                  Crédito com as melhores condições do mercado
                </p>
                <Button variant="primary" size="sm">
                  Simular empréstimo
                </Button>
              </div>
            </Card>

            <Card variant="elevated">
              <div style={{ padding: "8px", textAlign: "center" }}>
                <TrendingUp size={56} color={theme.colors.primary} style={{ margin: "0 auto 16px" }} />
                <h5 style={{
                  fontSize: theme.typography.h5.fontSize,
                  fontWeight: theme.typography.h5.fontWeight,
                  marginBottom: "12px"
                }}>
                  Seguros
                </h5>
                <p style={{
                  fontSize: theme.typography.p.fontSize,
                  color: theme.colors.textSecondary,
                  marginBottom: "16px"
                }}>
                  Proteja o que é mais importante para você
                </p>
                <Button variant="primary" size="sm">
                  Contratar seguro
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BB Section */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{
            fontSize: theme.typography.h3.fontSize,
            fontWeight: theme.typography.h3.fontWeight,
            textAlign: "center",
            marginBottom: "40px"
          }}>
            Por que escolher o Banco do Brasil?
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: theme.colors.primaryLight,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px"
              }}>
                <Shield size={40} color={theme.colors.primary} />
              </div>
              <h5 style={{
                fontSize: theme.typography.h5.fontSize,
                fontWeight: theme.typography.h5.fontWeight,
                marginBottom: "12px"
              }}>
                Segurança e Confiança
              </h5>
              <p style={{
                fontSize: theme.typography.p.fontSize,
                color: theme.colors.textSecondary
              }}>
                Mais de 200 anos de história protegendo seu patrimônio
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: theme.colors.primaryLight,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px"
              }}>
                <Smartphone size={40} color={theme.colors.primary} />
              </div>
              <h5 style={{
                fontSize: theme.typography.h5.fontSize,
                fontWeight: theme.typography.h5.fontWeight,
                marginBottom: "12px"
              }}>
                Tecnologia Avançada
              </h5>
              <p style={{
                fontSize: theme.typography.p.fontSize,
                color: theme.colors.textSecondary
              }}>
                Soluções digitais que facilitam o seu dia a dia
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: theme.colors.primaryLight,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px"
              }}>
                <Building size={40} color={theme.colors.primary} />
              </div>
              <h5 style={{
                fontSize: theme.typography.h5.fontSize,
                fontWeight: theme.typography.h5.fontWeight,
                marginBottom: "12px"
              }}>
                Presença Nacional
              </h5>
              <p style={{
                fontSize: theme.typography.p.fontSize,
                color: theme.colors.textSecondary
              }}>
                Mais de 5 mil agências em todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}