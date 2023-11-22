import { Title } from "../components/Title";
import { Card } from "../layouts/Card";

export const HomePage = () => {
  return (
    <>
      <div
        style={{
          height: 300,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: 40, width: 640 }}>
          Делитесь файлами без проблем и ограничений
        </h2>
        <p>А каким файлообменником ты пользуешься?</p>
      </div>
      <Card>
        <Title />
      </Card>
    </>
  );
};
