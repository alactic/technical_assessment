import {HttpStatus, HttpException} from '@nestjs/common';

export class NotFoundException extends HttpException {
    constructor(msg: string | object) {
        super(msg, HttpStatus.NOT_FOUND);
    }
}

export class UserNotFoundException extends NotFoundException {
    constructor() {
        super('User not found.');
    }
}
export class RiskServiceNotFound extends NotFoundException {
    constructor() {
        super('Risk service not found.');
    }
}

export class ServiceNotFound extends NotFoundException {
    constructor() {
        super('Service not found.');
    }
}

export class UserTypeNotFoundException extends NotFoundException {
    constructor() {
        super('This is user type was not found.');
    }
}

export class ItemNotFoundException extends NotFoundException {
    constructor() {
        super('Item not found.');
    }
}

export class GroupNotFoundException extends NotFoundException {
    constructor() {
        super('Group not found.');
    }
}

export class CategoryNotFoundException extends NotFoundException {
    constructor() {
        super('Category not found.');
    }
}

export class AccountNotFoundException extends NotFoundException {
    constructor() {
        super('Account not found.');
    }
}

export class OrganizationNotFoundException extends NotFoundException {
    constructor() {
        super('Organization not found.');
    }
}

export class PaymentLinesNotFoundException extends NotFoundException {
    constructor() {
        super('Payment Lines not found.');
    }
}

export class MembersNotFoundException extends NotFoundException {
    constructor() {
        super('Uploaded Members not found.');
    }
}

export class TransactionNotFoundException extends NotFoundException {
    constructor() {
        super('Transaction not found.');
    }
}
