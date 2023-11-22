import { DownloadIcon } from "../assets/icons";
import { ActionButton } from "../components/ActionButton";
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
          marginBottom: 48,
        }}
      >
        <h2 style={{ fontSize: 40, width: 640, margin: 0, marginBottom: 16 }}>
          Самый лучший файлообменник по мнению моих друзей
        </h2>
        <p style={{ margin: 0, marginBottom: 32, color: "#c7c7c7" }}>
          А каким файлообменником ты пользуешься?
        </p>
        <ActionButton
          backgroundColor="#9381ff"
          label="Присоединиться"
          icon={<DownloadIcon />}
        />
      </div>
      <Card>
        <Title />
      </Card>
    </>
  );
};
