export interface User {
    id: number;
    email: string;
    name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    phone_short: string;
    permissions?: any;
    is_activated: boolean;
    activated_at?: any;
    last_login: Date | '';
    is_superuser: number;
    property?: any;
    created_at: Date | '';
    updated_at: Date | '';
    deleted_at?: any;
    phone_list: any[];
}

export interface ApiArray {
    status: boolean;
    user: User;
    today: string;
    avg_today: number;
    avg_week: number[];
    avg_month: number[];
    users_mood: any[];
    already_checked: boolean;
    login_page: boolean;
}
