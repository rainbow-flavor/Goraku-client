import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { FaAngleDown, FaPlus, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

import styles from "./CustomerService.module.css";

import "react-toastify/dist/ReactToastify.css";
import api from "@/api/api";
import Input from "@/components/common/input/Input";
import { ERROR_TEXT } from "@/constants/message";
import { RouteMap } from "@/constants/route";

import { clsx } from "clsx";

const CustomerService = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    const MAX_ALLOWED_SIZE = 30 * 1024 * 1024;

    if (files && files.length > 0) {
      const fileList = Array.from(files);

      if (fileList[0]?.size >= MAX_ALLOWED_SIZE) {
        return toast.error(ERROR_TEXT.NO_ALLOW_IMAGE_SIZE, {
          autoClose: 2000,
        });
      }

      setFile(fileList[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const onClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const csRequest = {
        email: formData.get("email"),
        cstype: formData.get("cstype"),
        content: formData.get("content"),
      };

      const postFormData = new FormData();
      postFormData.append(
        "csRequest",
        new Blob([JSON.stringify(csRequest)], {
          type: "application/json",
        })
      );

      if (file) {
        postFormData.append("image", file);
      }

      await toast.promise(() => api.post("/cs", postFormData), {
        pending: "문의내역 등록 중입니다.",
        success: "문의 내역 등록이 완료되었습니다!",
        error: ERROR_TEXT.SERVER_ERROR,
      });

      setFile(null);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleField}>
        <h2>문의</h2>
        <p>사이트 관련 각종 문의를 넣어주세요.</p>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <Input
            styleType="normal"
            name="email"
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            required
          />
        </div>

        <div>
          <label htmlFor="cstype">문의 종류</label>
          <div className={styles.cstypeField}>
            <select
              name="cstype"
              id="cstype"
              className={styles.cstype}
              required
            >
              <option value="정보 추가/수정/삭제 요청">
                정보 추가/수정/삭제 요청
              </option>
              <option value="서비스 관련">서비스 관련</option>
              <option value="제휴 문의">제휴 문의</option>
              <option value="기타">기타</option>
            </select>
            <FaAngleDown color="#fff" size={15} />
          </div>
        </div>

        <div>
          <label htmlFor="content">문의 내용</label>
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={10}
            className={styles.content}
            required
          />
        </div>

        <div>
          <label htmlFor="image">사진</label>
          <input
            id="image"
            ref={fileInputRef}
            className={styles.fileInput}
            type="file"
            onChange={onChangeFile}
            accept="image/png, image/jpeg"
            title=" "
          />

          <div className={styles.previewImgList}>
            <div
              className={clsx(styles.previewImg, styles.fileInputButton)}
              onClick={onClickFileInput}
            >
              <FaPlus size={20} color="#fff" />
            </div>

            {file && (
              <div className={styles.previewImg}>
                <img src={URL.createObjectURL(file)} alt="" />
                <div className={styles.closeIcon} onClick={removeFile}>
                  <FaTimes size={20} color="#fff" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.submitField}>
          <p>
            아래의 제출 버튼을 누름으로서 GORAKU의 &nbsp;
            <Link className={styles.link} href={RouteMap.TERM_OF_CONTRACT}>
              이용약관
            </Link>
            과&nbsp;
            <Link className={styles.link} href={RouteMap.PRIVACY}>
              개인정보처리방침
            </Link>
            에 동의한 것으로 간주합니다.
          </p>

          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? "LOADING" : "제출"}
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar />
    </div>
  );
};

export default CustomerService;
