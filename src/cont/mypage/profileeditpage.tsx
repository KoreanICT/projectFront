import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileForm {
    loginId: string;
    name: string;
    birthDate: string;
    gender: string;
    nationality: string;
    lastName: string;
    firstName: string;
    phoneFirst: string;
    phoneMiddle: string;
    phoneLast: string;
    areaCode: string;
    telephoneMiddle: string;
    telephoneLast: string;
    email: string;
    smsAgree: boolean;
    emailAgree: boolean;
}

const ProfileEditPage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState<ProfileForm>({
        loginId: '',
        name: '',
        birthDate: '',
        gender: '',
        nationality: '',
        lastName: '',
        firstName: '',
        phoneFirst: '010',
        phoneMiddle: '',
        phoneLast: '',
        areaCode: '02',
        telephoneMiddle: '',
        telephoneLast: '',
        email: '',
        smsAgree: false,
        emailAgree: false,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // TODO: 실제 회원정보 조회 API로 교체
                // const response = await memberService.getMyProfile();

                const profile: ProfileForm = {
                    loginId: 'pkwed1206',
                    name: '홍길동',
                    birthDate: '2001년 10월 06일',
                    gender: '남자',
                    nationality: '내국인',
                    lastName: 'HONG',
                    firstName: 'GILDONG',
                    phoneFirst: '010',
                    phoneMiddle: '4532',
                    phoneLast: '9516',
                    areaCode: '02',
                    telephoneMiddle: '',
                    telephoneLast: '',
                    email: 'pkwed1206@gmail.com',
                    smsAgree: true,
                    emailAgree: true,
                };

                setForm(profile);
            } catch (error) {
                console.error('회원정보 조회 실패:', error);
                alert('회원정보를 불러오지 못했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { name, checked } = event.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: checked,
        }));
    };

    const handleNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { name, value } = event.target;
        const numberOnlyValue = value.replace(/[^0-9]/g, '');

        setForm((previousForm) => ({
            ...previousForm,
            [name]: numberOnlyValue,
        }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (!form.lastName.trim()) {
            alert('영문 성을 입력해주세요.');
            return;
        }

        if (!form.firstName.trim()) {
            alert('영문 이름을 입력해주세요.');
            return;
        }

        if (!form.phoneMiddle || !form.phoneLast) {
            alert('휴대전화 번호를 입력해주세요.');
            return;
        }

        if (!form.email.trim()) {
            alert('이메일을 입력해주세요.');
            return;
        }

        const requestData = {
            lastName: form.lastName.trim(),
            firstName: form.firstName.trim(),
            phone: [
                form.phoneFirst,
                form.phoneMiddle,
                form.phoneLast,
            ].join('-'),
            telephone:
                form.telephoneMiddle && form.telephoneLast
                    ? [
                        form.areaCode,
                        form.telephoneMiddle,
                        form.telephoneLast,
                    ].join('-')
                    : '',
            email: form.email.trim(),
            smsAgree: form.smsAgree ? 'Y' : 'N',
            emailAgree: form.emailAgree ? 'Y' : 'N',
        };

        try {
            console.log('회원정보 수정 요청:', requestData);

            // TODO: 실제 회원정보 수정 API로 교체
            // await memberService.updateMyProfile(requestData);

            alert('기본정보가 저장되었습니다.');
        } catch (error) {
            console.error('회원정보 수정 실패:', error);
            alert('기본정보 저장에 실패했습니다.');
        }
    };

    const handleCancel = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '500px' }}
            >
                <div className="text-center">
                    <div
                        className="spinner-border text-primary mb-3"
                        role="status"
                    >
                        <span className="visually-hidden">로딩 중</span>
                    </div>

                    <p className="text-secondary mb-0">
                        회원정보를 불러오는 중입니다.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <main className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-xl-10">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-bottom py-4 px-4 px-md-5">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '46px',
                                        height: '46px',
                                        fontSize: '20px',
                                    }}
                                >
                                    👤
                                </div>

                                <div>
                                    <h2 className="h4 fw-bold mb-1">
                                        기본정보 관리
                                    </h2>

                                    <p className="text-secondary mb-0">
                                        회원님의 기본정보와 수신 설정을 관리합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={handleSubmit}>
                                <section className="mb-5">
                                    <h3 className="h6 fw-bold text-primary mb-3">
                                        회원 기본정보
                                    </h3>

                                    <div className="border rounded-3 overflow-hidden">
                                        <div className="row g-0 border-bottom">
                                            <div className="col-md-3 bg-light px-4 py-3 fw-semibold">
                                                아이디
                                            </div>

                                            <div className="col-md-9 px-4 py-3">
                                                {form.loginId}
                                            </div>
                                        </div>

                                        <div className="row g-0 border-bottom">
                                            <div className="col-md-3 bg-light px-4 py-3 fw-semibold">
                                                성명
                                            </div>

                                            <div className="col-md-9 px-4 py-3">
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span>{form.name}</span>

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary btn-sm"
                                                    >
                                                        인적사항 변경
                                                    </button>
                                                </div>

                                                <p className="small text-secondary mt-2 mb-0">
                                                    이름, 생년월일, 성별이 변경된 경우 본인 확인을
                                                    통해 수정할 수 있습니다.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-0 border-bottom">
                                            <div className="col-md-3 bg-light px-4 py-3 fw-semibold">
                                                생년월일
                                            </div>

                                            <div className="col-md-9 px-4 py-3">
                                                {form.birthDate}
                                            </div>
                                        </div>

                                        <div className="row g-0 border-bottom">
                                            <div className="col-md-3 bg-light px-4 py-3 fw-semibold">
                                                성별
                                            </div>

                                            <div className="col-md-9 px-4 py-3">
                                                {form.gender}
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col-md-3 bg-light px-4 py-3 fw-semibold">
                                                내국인 여부
                                            </div>

                                            <div className="col-md-9 px-4 py-3">
                                                {form.nationality}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-5">
                                    <h3 className="h6 fw-bold text-primary mb-3">
                                        연락처 정보
                                    </h3>

                                    <div className="row g-4">
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                영문 이름
                                            </label>

                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label
                                                        htmlFor="lastName"
                                                        className="form-label small text-secondary"
                                                    >
                                                        성(Last Name)
                                                    </label>

                                                    <input
                                                        id="lastName"
                                                        type="text"
                                                        name="lastName"
                                                        value={form.lastName}
                                                        onChange={handleChange}
                                                        maxLength={30}
                                                        className="form-control"
                                                        placeholder="예: LEE"
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label
                                                        htmlFor="firstName"
                                                        className="form-label small text-secondary"
                                                    >
                                                        이름(First Name)
                                                    </label>

                                                    <input
                                                        id="firstName"
                                                        type="text"
                                                        name="firstName"
                                                        value={form.firstName}
                                                        onChange={handleChange}
                                                        maxLength={30}
                                                        className="form-control"
                                                        placeholder="예: JUHWA"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                htmlFor="phoneFirst"
                                                className="form-label fw-semibold"
                                            >
                                                휴대전화
                                            </label>

                                            <div className="row g-2">
                                                <div className="col-4">
                                                    <select
                                                        id="phoneFirst"
                                                        name="phoneFirst"
                                                        value={form.phoneFirst}
                                                        onChange={handleChange}
                                                        className="form-select"
                                                    >
                                                        <option value="010">010</option>
                                                        <option value="011">011</option>
                                                        <option value="016">016</option>
                                                        <option value="017">017</option>
                                                        <option value="018">018</option>
                                                        <option value="019">019</option>
                                                    </select>
                                                </div>

                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        name="phoneMiddle"
                                                        value={form.phoneMiddle}
                                                        onChange={handleNumberChange}
                                                        maxLength={4}
                                                        inputMode="numeric"
                                                        className="form-control"
                                                        placeholder="0000"
                                                    />
                                                </div>

                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        name="phoneLast"
                                                        value={form.phoneLast}
                                                        onChange={handleNumberChange}
                                                        maxLength={4}
                                                        inputMode="numeric"
                                                        className="form-control"
                                                        placeholder="0000"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                htmlFor="areaCode"
                                                className="form-label fw-semibold"
                                            >
                                                일반 연락처
                                            </label>

                                            <div className="row g-2">
                                                <div className="col-md-4">
                                                    <select
                                                        id="areaCode"
                                                        name="areaCode"
                                                        value={form.areaCode}
                                                        onChange={handleChange}
                                                        className="form-select"
                                                    >
                                                        <option value="02">02 서울</option>
                                                        <option value="031">031 경기</option>
                                                        <option value="032">032 인천</option>
                                                        <option value="033">033 강원</option>
                                                        <option value="041">041 충남</option>
                                                        <option value="042">042 대전</option>
                                                        <option value="043">043 충북</option>
                                                        <option value="044">044 세종</option>
                                                        <option value="051">051 부산</option>
                                                        <option value="052">052 울산</option>
                                                        <option value="053">053 대구</option>
                                                        <option value="054">054 경북</option>
                                                        <option value="055">055 경남</option>
                                                        <option value="061">061 전남</option>
                                                        <option value="062">062 광주</option>
                                                        <option value="063">063 전북</option>
                                                        <option value="064">064 제주</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-4">
                                                    <input
                                                        type="text"
                                                        name="telephoneMiddle"
                                                        value={form.telephoneMiddle}
                                                        onChange={handleNumberChange}
                                                        maxLength={4}
                                                        inputMode="numeric"
                                                        className="form-control"
                                                        placeholder="0000"
                                                    />
                                                </div>

                                                <div className="col-md-4">
                                                    <input
                                                        type="text"
                                                        name="telephoneLast"
                                                        value={form.telephoneLast}
                                                        onChange={handleNumberChange}
                                                        maxLength={4}
                                                        inputMode="numeric"
                                                        className="form-control"
                                                        placeholder="0000"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-text">
                                                일반 연락처는 선택 입력 항목입니다.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                htmlFor="email"
                                                className="form-label fw-semibold"
                                            >
                                                이메일
                                            </label>

                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                maxLength={100}
                                                className="form-control"
                                                placeholder="example@email.com"
                                            />
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-5">
                                    <h3 className="h6 fw-bold text-primary mb-3">
                                        수신 동의 설정
                                    </h3>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="card h-100 border">
                                                <div className="card-body">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            id="smsAgree"
                                                            type="checkbox"
                                                            name="smsAgree"
                                                            checked={form.smsAgree}
                                                            onChange={handleCheckboxChange}
                                                            className="form-check-input"
                                                            role="switch"
                                                        />

                                                        <label
                                                            htmlFor="smsAgree"
                                                            className="form-check-label fw-semibold"
                                                        >
                                                            SMS 수신 동의
                                                        </label>
                                                    </div>

                                                    <p className="small text-secondary mt-3 mb-0">
                                                        원서접수, 자격증 발급 등 주요 안내를
                                                        휴대전화 문자로 받아볼 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card h-100 border">
                                                <div className="card-body">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            id="emailAgree"
                                                            type="checkbox"
                                                            name="emailAgree"
                                                            checked={form.emailAgree}
                                                            onChange={handleCheckboxChange}
                                                            className="form-check-input"
                                                            role="switch"
                                                        />

                                                        <label
                                                            htmlFor="emailAgree"
                                                            className="form-check-label fw-semibold"
                                                        >
                                                            이메일 수신 동의
                                                        </label>
                                                    </div>

                                                    <p className="small text-secondary mt-3 mb-0">
                                                        마케팅, 홍보 및 서비스 관련 정보를
                                                        이메일로 받아볼 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="d-flex justify-content-center gap-2 pt-3 border-top">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="btn btn-outline-secondary px-4"
                                    >
                                        취소
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-5"
                                    >
                                        저장하기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfileEditPage;