import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { FaAngleDown, FaTimes } from "react-icons/fa";

import styles from "./CustomerService.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "@/api/api";
import Input from "@/components/common/input/Input";
import { RouteMap } from "@/constants/route";

const CustomerService = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const fileList = Array.from(files);
      setFiles((prev) => prev.concat(fileList));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((item, i) => i !== index));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (files.length === 0) return alert("이미지를 등록해주세요!");
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

      files.forEach((item) => {
        postFormData.append("image", item);
      });

      await toast.promise(() => api.post("/cs", postFormData), {
        pending: "문의내역 등록 중입니다.",
        success: "문의 내역 등록이 완료되었습니다!",
        error:
          "알 수 없는 에러가 발생했습니다. 새로고침이나 다시 시도해주세요.",
      });

      setFiles([]);
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
          <div>
            <input
              id="image"
              type="file"
              onChange={onChangeFile}
              accept="image/png, image/jpeg"
              title=" "
              required
            />
          </div>
          <div className={styles.previewImgList}>
            {files.map((item, index) => {
              return (
                <div key={index} className={styles.previewImg}>
                  <img src={URL.createObjectURL(item)} alt="" />
                  <div
                    className={styles.closeIcon}
                    onClick={() => removeFile(index)}
                  >
                    <FaTimes size={20} color="#fff" />
                  </div>
                </div>
              );
            })}
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
