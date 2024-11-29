import { atom } from 'recoil';

export const isEditingBannerInfoState = atom({
  key: 'isEditingBannerInfoState',
  default: false,
});

export const isEditingCompanyInfoState = atom({
  key: 'isEditingCompanyInfoState',
  default: false,
});

export const isEditigCardInfoState = atom({
  key: 'isEditingCompanyInfoState',
  default: false,
});

export const titleState = atom({
  key: 'titleState',
  default: 'Psalms 95: 1-6',
});

export const contentState = atom({
  key: 'contentState',
  default: '"... Sing joyful songs to the LORD! Praise the mighty rock where we are safe. Come to worship him with thankful hearts and songs of praise. the LORD is the greatest God, king over all other gods..."',
});

export const companyInfoState = atom({
  key: 'companyInfoState',
  default: 'Our company is dedicated to providing the best service possible to our customers. We strive to provide the best quality products and services to our customers. Our team is dedicated to providing the best customer service possible. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, molestias? Beatae repudiandae harum saepe voluptatibus illum. Expedita sit consequatur sapiente dolorum culpa, nam atque unde soluta officiis vitae similique enim! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid, laboriosam ipsum hic voluptatum molestias ipsa molestiae iusto corporis quas magni necessitatibus atque odit cum repellendus itaque explicabo ullam. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque fuga impedit ullam, dolore molestiae reiciendis facere ab omnis, qui fugiat, voluptatibus explicabo exercitationem! Mollitia architecto dignissimos nulla laboriosam quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere architecto, nostrum dicta voluptas animi, impedit sunt reiciendis natus fugiat possimus excepturi sed eveniet ratione consequatur consequuntur similique? Cupiditate, ducimus?',
});

export const cardInfoState = atom({
  key: 'cardInfoState',
  default: 'Become a partner in sharing the gospel through music. Whether through prayer, financial support, or simply sharing the message, you can help spread the transformative power of worship to people around the world.',
});

export const cardTitleState = atom({
  key: 'cardTitleState',
  default: 'Join the Mission of Spreading God\'s Love',
});