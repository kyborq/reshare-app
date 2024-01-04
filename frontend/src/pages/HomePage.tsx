import {
  DownloadIcon,
  EyeIcon,
  KeyBoldIcon,
  UserBoldIcon,
} from "../assets/icons";
import { ActionButton } from "../components/ActionButton";
import { Modal } from "../components/Modal";
import { Title } from "../components/Title";
import { Card } from "../layouts/Card";
import { Field } from "../components/Field";
import { Form } from "../components/Form";
import { useModal } from "../hooks/useModal";
import { ListElement } from "../components/ListElement";
import { Hero } from "../components/Hero";
import { ChangeEvent, useRef } from "react";
import { useUpload } from "../api/hooks/useUpload";
import { useStorage } from "../api/hooks/useStorage";
import { Button } from "../components/Button";
import { UploadedFile } from "../api/models/fileModel";

export const HomePage = () => {
  const registerModal = useModal();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { files, updateList } = useStorage();
  const { uploadFile, downloadFile } = useUpload(updateList);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmitFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const currentFile = files[0];
      uploadFile(currentFile);
    }
  };

  const handleDownload = (file: UploadedFile) => {
    downloadFile(file);
  };

  return (
    <>
      <Hero
        title="Самый лучший файлообменник по мнению моих друзей"
        text="А каким файлообменником ты пользуешься?"
      />
      <Card>
        <Title title="Мои файлы">
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={handleSubmitFile}
          />
          <ActionButton
            label="Загрузить"
            icon={<DownloadIcon fill="#ffffff" />}
            onClick={handleUploadClick}
          />
        </Title>
        {files &&
          files.map((file, index) => (
            <ListElement
              key={index}
              title={file.alias}
              text={file.uploadDate.toString()}
            >
              <Button
                icon={<EyeIcon fill="#9381ff" />}
                onClick={() => handleDownload(file)}
              />
              <Button
                icon={<DownloadIcon fill="#9381ff" />}
                onClick={() => handleDownload(file)}
              />
            </ListElement>
          ))}
      </Card>

      <Modal state={registerModal}>
        <Form title="Регистрация">
          <Form.Content>
            <Field
              icon={<UserBoldIcon fill="#adb5bd" />}
              label="Электронная почта:"
              placeholder="example@mail.com"
            />
            <Field
              icon={<KeyBoldIcon fill="#adb5bd" />}
              label="Пароль:"
              placeholder="Password"
            />
            <Field
              icon={<KeyBoldIcon fill="#adb5bd" />}
              label="Пароль:"
              placeholder="Password"
            />
          </Form.Content>
          <ActionButton icon={<KeyBoldIcon fill="#ffffff" />} label="Войти" />
        </Form>
      </Modal>
    </>
  );
};
