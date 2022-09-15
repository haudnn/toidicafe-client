function covertSlug(slug: string) {
  switch (slug) {
    case 'lien-chieu':
      return 'Liên Chiểu';
    case 'cam-le':
      return 'Cẩm Lệ';
    case 'son-tra':
      return 'Sơn Trà';
    case 'ngu-hanh-son':
      return 'Ngũ Hành Sơn';
    case 'thanh-khe':
      return 'Thanh Khê';
    case 'hai-chau':
      return 'Hải Châu';
    case 'chill':
      return 'Chill';
    case 'doc-sach':
      return 'Đọc Sách';
    case 'hen-ho':
      return 'Hẹn hò';
    case 'lam-viec':
      return 'Làm Việc';
    case 'song-ao':
      return 'Sống ảo';
    default: 
        return slug;
  }
}
export default covertSlug;
