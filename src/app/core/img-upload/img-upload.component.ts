import { Component } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent {
  loading = false;
  // 图片地址
  imgUrl = 'http://ozkbl6lk3.bkt.clouddn.com/18-7-4/83972010.jpg';
  @Output() postImgUrl = new EventEmitter();

  constructor(private msg: NzMessageService) {}

  beforeUpload = (file: File) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      this.msg.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      this.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (img: string) => {
        this.loading = false;
        this.imgUrl = img;
        this.postImgUrl.emit(this.imgUrl);
      });
    }
  }

}
